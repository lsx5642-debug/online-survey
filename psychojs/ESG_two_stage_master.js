/***************************** 
 * Esg_Two_Stage_Master *
 *****************************/

import { core, data, sound, util, visual, hardware } from '../lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ESG_two_stage_master';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'group': ['1', '2', '3', '4'],
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment without a participant dialog; Yahoo/DataPipe handles identity
const flowScheduler = new Scheduler(psychoJS);
psychoJS.schedule(flowScheduler);

// run the Builder-generated launch routine
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(launch_shared_experimentRoutineBegin());
flowScheduler.add(launch_shared_experimentRoutineEachFrame());
flowScheduler.add(launch_shared_experimentRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var launch_shared_experimentClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "launch_shared_experiment"
  launch_shared_experimentClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var launch_shared_experimentMaxDurationReached;
var launch_shared_experimentMaxDuration;
var launch_shared_experimentComponents;
function launch_shared_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'launch_shared_experiment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    launch_shared_experimentClock.reset(routineTimer.getTime());
    routineTimer.add(0.050000);
    launch_shared_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from launch_shared_experiment_code
    window.dispatchEvent(new CustomEvent('esg-psychopy-ready', {detail: {source: 'ESG_two_stage_master.psyexp', configHash: 'd3e6c14cad4eb6cce6312cc07eb4adcbb5c1cc2dfcbdeebc9a84ee76c8a01319'}}));
    continueRoutine = false;
    
    psychoJS.experiment.addData('launch_shared_experiment.started', globalClock.getTime());
    launch_shared_experimentMaxDuration = 0.05
    // keep track of which components have finished
    launch_shared_experimentComponents = [];
    
    for (const thisComponent of launch_shared_experimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function launch_shared_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'launch_shared_experiment' ---
    // get current time
    t = launch_shared_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > launch_shared_experimentMaxDuration) {
        launch_shared_experimentMaxDurationReached = true
        continueRoutine = false
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of launch_shared_experimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function launch_shared_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'launch_shared_experiment' ---
    for (const thisComponent of launch_shared_experimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('launch_shared_experiment.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (launch_shared_experimentMaxDurationReached) {
        launch_shared_experimentClock.add(launch_shared_experimentMaxDuration);
    } else {
        launch_shared_experimentClock.add(0.050000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  if (!window.ESG_WEB_ADAPTER_ACTIVE) psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
