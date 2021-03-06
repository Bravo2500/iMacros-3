var ORIG_MR_DIR =  ONEDRIVE_DIR + "Config\\MR\\";
var MR_DIR =  ONEDRIVE_DIR + "Config\\MR\\";
var MR_BRANCH = "mafiareloaded.";
var MR_PROFILE_KEY = "profile";
var MR_PROFILE_FILE = MR_DIR + "profile.json";
var MR_FIGHTERS_EXCLUDE_FILE = new ConfigFile(MR_DIR, "FightersToExclude.json");
var MR_FRIENDS_FILE = new ConfigFile(MR_DIR, "Friends.json");
var MR_FIGHTERS_FILE = new ConfigFile(MR_DIR, "Fighters.json");
var MR_JOBS_FILE = new ConfigFile(MR_DIR, "Jobs.json");
var MR_CONFIG_FILE = new ConfigFile(MR_DIR, "MafiaReloaded.json");
var MR_HOMEFEED_FILE = new ConfigFile(MR_DIR, "Homefeed.json");

var MR = Object.freeze({
    "MR_FIGHTERS_EXCLUDE_FILE" : "FightersToExclude.json",
    "MR_FRIENDS_FILE": "Friends.json",
    "MR_FIGHTERS_FILE": "Fighters.json",
    "MR_JOBS_FILE": "Jobs.json",
    "MR_CONFIG_FILE": "MafiaReloaded.json",
    "MR_HOMEFEED_FILE": "Homefeed.json"
    }
);


function getMRFile(fileId){
    return new ConfigFile(MR_DIR, fileId);
}

function initMRObject(fileId){
    var file = getMRFile(fileId);
    return initObject(file);
}

function writeMRObject(object, fileId){
    var file = getMRFile(fileId);
    writeObject(object, file);
}

function LogFile(path, fileId){
    this.path = path;
    this.fileId = fileId;
    this.fullPath = function() { return this.path + "log." + this.fileId +  "." + getDateYYYYMMDD() + ".txt"};
}

function getProfile(){
    var profile = getFirefoxSetting(MR_BRANCH,  MR_PROFILE_KEY);
    return profile;
}

function setMRPath(logFile){
    var profile = getProfile();
    setMRPathProfile(profile, logFile);
}

function setMRPathProfile(profile, logFile){
    if (!isNullOrBlank(profile)){
        MR_DIR = ORIG_MR_DIR + profile + "\\";
        LOG_DIR = ORIG_LOG_DIR + profile + "\\";
    }
    LOG_FILE = new LogFile(LOG_DIR, logFile);
    logV2(INFO, "INIT", "Set MR Path To " + MR_DIR);
}
