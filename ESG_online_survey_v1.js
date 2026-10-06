/****************************** 
 * Esg_Screen_Based_Demo *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ESG_screen_based_demo';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
var None = undefined;
var True = true;
var False = false;
var condition;
var labels_A;
var labels_B;
var gri_codes;
var values_2024;
var values_2025;
var changes;
var current_labels;
var comprehension_attempts;
var comprehension_error;
var validation_message;
var pupil_connected;
var pupil_connection_error;
var pupil_time_offset;
var pupil_pub_port;
var pupil_clock_sync_error;
var send_pupil_annotation;
var stimulus_clock;
var investment_yes;
var age_text;
var age_text_normalized;
var normalize_age_text;
var age_text_is_valid;
var age_group_from_text;
var occupation_options;
var occupation_other_visible;
var occupation_text;
var check_button_clicked;
var esg_performance_screen_next_clicked;
var esg_difficulty_screen_next_clicked;
var label_difficulty_screen_next_clicked;
var investment_intention_screen_next_clicked;
var perceived_standardization_screen_next_clicked;
var esg_familiarity_screen_next_clicked;
var gri_familiarity_screen_next_clicked;
var investment_experience_next_clicked;
var investment_years_next_clicked;
var finance_education_next_clicked;
var demographics_1_next_clicked;
var demographics_2_next_clicked;
var experimentData;
var anonymousParticipantId;
var dataUploadStarted;
var dataUploadFinished;
var dataUploadSucceeded;
var dataUploadError;
var dataUploadResult;
var dataUploadPromise;
var completionCode;
function getOccupationTextFromRating(rating) {
    if (rating === undefined) {
        return "";
    }
    const options = ["会社員", "公務員", "教員", "自営業・自由業", "パート・アルバイト", "専業主婦・主夫", "学生", "無職", "その他"];
    const ratingText = String(rating);
    const ratingIndex = Number.parseInt(ratingText, 10) - 1;
    if ((!Number.isNaN(ratingIndex)) && ratingIndex >= 0 && ratingIndex < options.length) {
        return options[ratingIndex];
    }
    return ratingText;
}
function getTextboxText(box) {
    if (box && box.text !== undefined) {
        return String(box.text).trim();
    }
    if (box && typeof box.getText === "function") {
        return String(box.getText()).trim();
    }
    return "";
}
function setOptionalOpacity(component, opacity) {
    if (component && typeof component.setOpacity === "function") {
        component.setOpacity(opacity);
    } else if (component) {
        component.opacity = opacity;
    }
}
function getResponsiveLayoutScale() {
    const widthScale = (window.innerWidth || 1920) / 1920.0;
    const heightScale = (window.innerHeight || 1080) / 1080.0;
    return Math.min(widthScale, heightScale, 1.0);
}
function scaleVisualValue(value, scale) {
    if (typeof value === "number") {
        return value * scale;
    }
    if (Array.isArray(value)) {
        return value.map((item) => scaleVisualValue(item, scale));
    }
    return value;
}
function scaleVisualOptions(options) {
    if (!options) {
        return options;
    }
    const scale = getResponsiveLayoutScale();
    if (scale >= 0.999) {
        return options;
    }
    const scaledOptions = Object.assign({}, options);
    const scaledKeys = ["pos", "size", "height", "width", "wrapWidth", "fontSize", "letterHeight", "padding", "borderWidth", "lineWidth", "vertices"];
    for (const key of scaledKeys) {
        if (Object.prototype.hasOwnProperty.call(scaledOptions, key)) {
            scaledOptions[key] = scaleVisualValue(scaledOptions[key], scale);
        }
    }
    return scaledOptions;
}
function setResponsiveComponentValue(component, key, value) {
    const setterName = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    if (component && typeof component[setterName] === "function") {
        component[setterName](value, false);
    } else if (component) {
        component[key] = value;
        component[`_${key}`] = value;
    }
}
function scaleComponentForResponsiveLayout(component) {
    if (!component || component._responsiveLayoutScaled) {
        return;
    }
    const scale = getResponsiveLayoutScale();
    component._responsiveLayoutScaled = true;
    if (scale >= 0.999) {
        return;
    }
    const scaledKeys = ["pos", "size", "height", "width", "wrapWidth", "fontSize", "letterHeight", "padding", "borderWidth", "lineWidth", "vertices"];
    for (const key of scaledKeys) {
        const value = component[key];
        if (value !== undefined && value !== null) {
            setResponsiveComponentValue(component, key, scaleVisualValue(value, scale));
        }
    }
}
function wrapResponsiveAutoDraw(Constructor) {
    if (!Constructor || !Constructor.prototype || Constructor.prototype._responsiveAutoDrawWrapped) {
        return;
    }
    const originalSetAutoDraw = Constructor.prototype.setAutoDraw;
    if (typeof originalSetAutoDraw !== "function") {
        return;
    }
    Constructor.prototype.setAutoDraw = function(autoDraw, log) {
        if (autoDraw) {
            scaleComponentForResponsiveLayout(this);
        }
        return originalSetAutoDraw.call(this, autoDraw, log);
    };
    Constructor.prototype._responsiveAutoDrawWrapped = true;
}
function applyResponsiveScalingToVisualConstructors() {
    const constructorNames = ["TextStim", "ButtonStim", "Slider", "TextBox", "Rect", "ShapeStim"];
    for (const constructorName of constructorNames) {
        if (visual[constructorName]) {
            wrapResponsiveAutoDraw(visual[constructorName]);
        }
    }
}
const responsivePointerState = {
    x: 0,
    y: 0,
    pressed: false,
};
function updateResponsivePointerPosition(event) {
    const canvas = document.querySelector("canvas");
    const rect = canvas ? canvas.getBoundingClientRect() : {left: 0, top: 0, width: window.innerWidth, height: window.innerHeight};
    responsivePointerState.x = event.clientX - rect.left - (rect.width / 2);
    responsivePointerState.y = (rect.height / 2) - (event.clientY - rect.top);
}
window.addEventListener("pointerdown", (event) => {
    updateResponsivePointerPosition(event);
    responsivePointerState.pressed = true;
});
window.addEventListener("pointermove", updateResponsivePointerPosition);
window.addEventListener("pointerup", (event) => {
    updateResponsivePointerPosition(event);
    responsivePointerState.pressed = false;
});
function isButtonClickedResponsive(button) {
    if (button && button.isClicked) {
        return true;
    }
    if (!button || !responsivePointerState.pressed) {
        return false;
    }
    const pos = button.pos || button._pos || [0, 0];
    const size = button.size || button._size || [0, 0];
    const width = Math.abs(Array.isArray(size) ? size[0] : 0);
    const height = Math.abs(Array.isArray(size) ? size[1] : 0);
    if (!width || !height) {
        return false;
    }
    return (
        responsivePointerState.x >= (pos[0] - (width / 2)) &&
        responsivePointerState.x <= (pos[0] + (width / 2)) &&
        responsivePointerState.y >= (pos[1] - (height / 2)) &&
        responsivePointerState.y <= (pos[1] + (height / 2))
    );
}
function safeSetText(component, text) {
    if (component && typeof component.setText === "function") {
        component.setText(text);
    } else if (component) {
        component.text = text;
    }
}
function getUrlParameterValue(name) {
    try {
        return (new URLSearchParams(window.location.search).get(name) || "");
    } catch (error) {
        return "";
    }
}
function getConditionOverride() {
    const override = getUrlParameterValue("condition").trim().toUpperCase();
    return (["A", "B"].includes(override) ? override : "");
}
async function assignConditionBeforeStart() {
    const override = getConditionOverride();
    if (override) {
        condition = override;
        expInfo["condition"] = condition;
        expInfo["condition_assignment_source"] = "url_override";
        return Scheduler.Event.NEXT;
    }
    const experimentID = getDataPipeExperimentId();
    if (!experimentID) {
        document.body.innerHTML = "<p>実験を開始できません。DataPipe Experiment ID が設定されていません。</p>";
        throw new Error("DataPipe Experiment ID is required for condition assignment.");
    }
    const response = await fetch("https://pipe.jspsych.org/api/condition/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({experimentID: experimentID})
    });
    let responseBody = {};
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = {};
    }
    if (!response.ok) {
        const errorMessage = responseBody.message || responseBody.error || response.statusText || "Unknown condition assignment error";
        document.body.innerHTML = `<p>実験を開始できません。条件割り当てに失敗しました。</p><p>${errorMessage}</p>`;
        throw new Error(`Condition assignment failed (${response.status}): ${errorMessage}`);
    }
    const assignedNumber = Number.parseInt(String(responseBody.condition), 10);
    if (Number.isNaN(assignedNumber)) {
        document.body.innerHTML = "<p>実験を開始できません。条件割り当ての応答が不正です。</p>";
        throw new Error("Condition assignment response did not include a numeric condition.");
    }
    condition = ((assignedNumber % 2) === 0) ? "A" : "B";
    expInfo["condition"] = condition;
    expInfo["datapipe_condition_number"] = assignedNumber;
    expInfo["condition_assignment_source"] = "datapipe_sequence";
    return Scheduler.Event.NEXT;
}
function createAnonymousParticipantId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return ("p_" + window.crypto.randomUUID());
    }
    const randomPart = Math.random().toString(36).slice(2, 12);
    const timePart = Date.now().toString(36);
    return (`p_${timePart}_${randomPart}`);
}
function getOrCreateAnonymousParticipantId() {
    const storageKey = "esg_online_survey_v1_anonymous_participant_id";
    try {
        const existingId = window.sessionStorage.getItem(storageKey);
        if (existingId) {
            return existingId;
        }
        const newId = createAnonymousParticipantId();
        window.sessionStorage.setItem(storageKey, newId);
        return newId;
    } catch (error) {
        return createAnonymousParticipantId();
    }
}
function createCompletionCode() {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let codeBody = "";
    if (window.crypto && typeof window.crypto.getRandomValues === "function") {
        const values = new Uint8Array(12);
        window.crypto.getRandomValues(values);
        for (const value of values) {
            codeBody += alphabet[value % alphabet.length];
        }
    } else {
        for (let i = 0; i < 12; i += 1) {
            codeBody += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    }
    return `YC-${codeBody.slice(0, 4)}-${codeBody.slice(4, 8)}-${codeBody.slice(8, 12)}`;
}
function getOrCreateCompletionCode() {
    const storageKey = "esg_online_survey_v1_completion_code";
    try {
        const existingCode = window.sessionStorage.getItem(storageKey);
        if (existingCode) {
            return existingCode;
        }
        const newCode = createCompletionCode();
        window.sessionStorage.setItem(storageKey, newCode);
        return newCode;
    } catch (error) {
        return createCompletionCode();
    }
}
function getCompletedSubmissionRecord() {
    try {
        const recordText = window.localStorage.getItem("esg_online_survey_v1_completed_submission");
        return recordText ? JSON.parse(recordText) : null;
    } catch (error) {
        return null;
    }
}
function saveCompletedSubmissionRecord(record) {
    try {
        window.localStorage.setItem("esg_online_survey_v1_completed_submission", JSON.stringify(record));
    } catch (error) {
        console.warn("Could not save completed submission record.", error);
    }
}
function getSliderRating(slider) {
    if (slider && typeof slider.getRating === "function") {
        const rating = slider.getRating();
        return (rating === undefined ? "" : rating);
    }
    return "";
}
function getSliderRT(slider) {
    if (slider && typeof slider.getRT === "function") {
        const rt = slider.getRT();
        return (rt === undefined ? "" : rt);
    }
    return "";
}
function getDataPipeExperimentId() {
    if (window.ESG_DATAPIPE_EXPERIMENT_ID) {
        return String(window.ESG_DATAPIPE_EXPERIMENT_ID).trim();
    }
    return getUrlParameterValue("datapipe_experiment_id").trim();
}
function makeDataPipeFilename(dataObject) {
    const completedAt = String(dataObject.completed_at || new Date().toISOString()).replace(/[:.]/g, "-");
    const conditionText = String(dataObject.condition || "NA").replace(/[^A-Za-z0-9_-]/g, "");
    const participantText = String(dataObject.anonymous_participant_id || createAnonymousParticipantId()).replace(/[^A-Za-z0-9_-]/g, "");
    return `${participantText}_${conditionText}_${completedAt}.json`;
}
function savePendingExperimentData(filename, dataString) {
    try {
        window.localStorage.setItem("esg_online_survey_v1_pending_upload", JSON.stringify({
            filename: filename,
            data: dataString,
            saved_at: new Date().toISOString()
        }));
    } catch (error) {
        console.warn("Could not save pending experiment data locally.", error);
    }
}
function clearPendingExperimentData() {
    try {
        window.localStorage.removeItem("esg_online_survey_v1_pending_upload");
    } catch (error) {
        console.warn("Could not clear pending experiment data.", error);
    }
}
function buildExperimentData() {
    const ageRawText = ((age_text === undefined || age_text === null) ? getTextboxText(age_textbox) : String(age_text).trim());
    const normalizedAge = normalize_age_text ? normalize_age_text(ageRawText) : ageRawText;
    const ageGroup = (normalizedAge ? age_group_from_text(normalizedAge) : "");
    const investmentExperience = getSliderRating(investment_experience_response);
    const occupationRating = getSliderRating(occupation_attribute);
    const occupationTextValue = getOccupationTextFromRating(occupationRating);
    const occupationOtherText = (occupationTextValue === "その他" ? getTextboxText(occupation_other_textbox) : "");
    anonymousParticipantId = anonymousParticipantId || getOrCreateAnonymousParticipantId();
    completionCode = completionCode || getOrCreateCompletionCode();
    return {
        schema_version: "2026-09-28-test-v1",
        collection_phase: (getUrlParameterValue("collection_phase") || "test"),
        experiment_name: expName,
        completed_at: new Date().toISOString(),
        anonymous_participant_id: anonymousParticipantId,
        completion_status: "completed",
        completion_code: completionCode,
        condition: condition,
        screen_width: (window.screen ? window.screen.width : ""),
        screen_height: (window.screen ? window.screen.height : ""),
        window_inner_width: window.innerWidth,
        window_inner_height: window.innerHeight,
        stimulus_view_time: (stimulus_clock ? stimulus_clock.getTime() : ""),
        esg_performance: getSliderRating(esg_performance),
        esg_performance_rt: getSliderRT(esg_performance),
        esg_difficulty: getSliderRating(esg_difficulty),
        esg_difficulty_rt: getSliderRT(esg_difficulty),
        label_difficulty: getSliderRating(label_difficulty),
        label_difficulty_rt: getSliderRT(label_difficulty),
        investment_intention: getSliderRating(investment_intention),
        investment_intention_rt: getSliderRT(investment_intention),
        perceived_standardization: getSliderRating(perceived_standardization),
        perceived_standardization_rt: getSliderRT(perceived_standardization),
        esg_familiarity: getSliderRating(esg_familiarity),
        esg_familiarity_rt: getSliderRT(esg_familiarity),
        gri_familiarity: getSliderRating(gri_familiarity),
        gri_familiarity_rt: getSliderRT(gri_familiarity),
        investment_experience: investmentExperience,
        investment_experience_rt: getSliderRT(investment_experience_response),
        investment_years: (investment_yes ? getSliderRating(investment_years_response) : ""),
        investment_years_rt: (investment_yes ? getSliderRT(investment_years_response) : ""),
        finance_education: getSliderRating(finance_education_response),
        finance_education_rt: getSliderRT(finance_education_response),
        age: normalizedAge,
        age_group: ageGroup,
        gender: getSliderRating(gender),
        gender_rt: getSliderRT(gender),
        occupation_attribute: occupationTextValue,
        occupation_attribute_response: occupationRating,
        occupation_attribute_rt: getSliderRT(occupation_attribute),
        occupation_other_text: occupationOtherText
    };
}
function validateExperimentData(dataObject) {
    const errors = [];
    const requiredFields = [
        "anonymous_participant_id",
        "condition",
        "esg_performance",
        "esg_difficulty",
        "label_difficulty",
        "investment_intention",
        "perceived_standardization",
        "esg_familiarity",
        "gri_familiarity",
        "investment_experience",
        "age",
        "gender",
        "occupation_attribute"
    ];
    for (const fieldName of requiredFields) {
        if (dataObject[fieldName] === undefined || dataObject[fieldName] === null || dataObject[fieldName] === "") {
            errors.push(`${fieldName} is missing`);
        }
    }
    const ageNumber = Number.parseInt(String(dataObject.age), 10);
    if (Number.isNaN(ageNumber) || ageNumber < 18 || ageNumber > 120) {
        errors.push("age must be a number from 18 to 120");
    }
    if (dataObject.occupation_attribute === "その他" && !dataObject.occupation_other_text) {
        errors.push("occupation_other_text is missing");
    }
    return {
        ok: (errors.length === 0),
        errors: errors
    };
}
async function uploadExperimentData(dataObject) {
    const validation = validateExperimentData(dataObject);
    dataObject.integrity_check = validation;
    const dataString = JSON.stringify(dataObject, null, 2);
    const filename = makeDataPipeFilename(dataObject);
    savePendingExperimentData(filename, dataString);
    if (!validation.ok) {
        throw new Error(`Data integrity check failed: ${validation.errors.join("; ")}`);
    }
    const experimentID = getDataPipeExperimentId();
    if (!experimentID) {
        throw new Error("DataPipe TEST experiment ID is not configured. Add ?datapipe_experiment_id=YOUR_TEST_ID to the URL.");
    }
    const response = await fetch("https://pipe.jspsych.org/api/data/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            experimentID: experimentID,
            filename: filename,
            data: dataString
        })
    });
    let responseBody = {};
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = {};
    }
    if (response.status === 201 || response.status === 202) {
        clearPendingExperimentData();
        return {
            filename: filename,
            status: response.status,
            response: responseBody
        };
    }
    const errorMessage = responseBody.message || responseBody.error || response.statusText || "Unknown upload error";
    throw new Error(`Data upload failed (${response.status}): ${errorMessage}`);
}
function startDataUploadIfNeeded() {
    if (dataUploadStarted) {
        return;
    }
    dataUploadStarted = true;
    dataUploadFinished = false;
    dataUploadSucceeded = false;
    dataUploadError = "";
    anonymousParticipantId = anonymousParticipantId || getOrCreateAnonymousParticipantId();
    completionCode = completionCode || getOrCreateCompletionCode();
    const completedRecord = getCompletedSubmissionRecord();
    if (completedRecord && completedRecord.anonymous_participant_id === anonymousParticipantId && completedRecord.completion_code) {
        completionCode = completedRecord.completion_code;
        dataUploadResult = {
            filename: completedRecord.filename || "",
            status: "already_completed"
        };
        dataUploadSucceeded = true;
        dataUploadFinished = true;
        return;
    }
    experimentData = buildExperimentData();
    dataUploadPromise = uploadExperimentData(experimentData).then((result) => {
        dataUploadResult = result;
        saveCompletedSubmissionRecord({
            anonymous_participant_id: anonymousParticipantId,
            condition: condition,
            completion_status: "completed",
            completion_code: completionCode,
            filename: result.filename,
            completed_at: new Date().toISOString()
        });
        dataUploadSucceeded = true;
        dataUploadFinished = true;
    }).catch((error) => {
        dataUploadError = (error && error.message) ? error.message : String(error);
        dataUploadSucceeded = false;
        dataUploadFinished = true;
        console.error("Experiment data upload failed.", error);
    });
}
function retryDataUpload() {
    dataUploadStarted = false;
    dataUploadFinished = false;
    dataUploadSucceeded = false;
    dataUploadError = "";
    dataUploadResult = undefined;
    dataUploadPromise = undefined;
}
function updateEndUploadDisplay() {
    if (!dataUploadFinished) {
        safeSetText(end_title, "データ送信中");
        safeSetText(end_message, "回答データを送信しています。\nこの画面を閉じずにお待ちください。");
        safeSetText(finish_button, "終了");
        setOptionalOpacity(finish_button, 0.0);
        return;
    }
    setOptionalOpacity(finish_button, 1.0);
    if (dataUploadSucceeded) {
        safeSetText(end_title, "実験終了");
        safeSetText(end_message, "ご協力いただき、ありがとうございます。");
        safeSetText(finish_button, "終了");
        return;
    }
    safeSetText(end_title, "データ送信エラー");
    safeSetText(end_message, `回答データの送信が完了していません。\n回答はこのブラウザ内に一時保存されています。\n通信状況を確認してから、再送信してください。\n\nエラー: ${dataUploadError}`);
    safeSetText(finish_button, "再送信");
}
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
const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.schedule(flowScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(assignConditionBeforeStart);
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(exp_setupRoutineBegin());
flowScheduler.add(exp_setupRoutineEachFrame());
flowScheduler.add(exp_setupRoutineEnd());
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
flowScheduler.add(role_instructionRoutineBegin());
flowScheduler.add(role_instructionRoutineEachFrame());
flowScheduler.add(role_instructionRoutineEnd());
flowScheduler.add(comprehension_checkRoutineBegin());
flowScheduler.add(comprehension_checkRoutineEachFrame());
flowScheduler.add(comprehension_checkRoutineEnd());
flowScheduler.add(stimulus_guidanceRoutineBegin());
flowScheduler.add(stimulus_guidanceRoutineEachFrame());
flowScheduler.add(stimulus_guidanceRoutineEnd());
flowScheduler.add(fixationRoutineBegin());
flowScheduler.add(fixationRoutineEachFrame());
flowScheduler.add(fixationRoutineEnd());
flowScheduler.add(stimulus_tableRoutineBegin());
flowScheduler.add(stimulus_tableRoutineEachFrame());
flowScheduler.add(stimulus_tableRoutineEnd());
flowScheduler.add(esg_performance_screenRoutineBegin());
flowScheduler.add(esg_performance_screenRoutineEachFrame());
flowScheduler.add(esg_performance_screenRoutineEnd());
flowScheduler.add(esg_difficulty_screenRoutineBegin());
flowScheduler.add(esg_difficulty_screenRoutineEachFrame());
flowScheduler.add(esg_difficulty_screenRoutineEnd());
flowScheduler.add(label_difficulty_screenRoutineBegin());
flowScheduler.add(label_difficulty_screenRoutineEachFrame());
flowScheduler.add(label_difficulty_screenRoutineEnd());
flowScheduler.add(investment_intention_screenRoutineBegin());
flowScheduler.add(investment_intention_screenRoutineEachFrame());
flowScheduler.add(investment_intention_screenRoutineEnd());
flowScheduler.add(perceived_standardization_screenRoutineBegin());
flowScheduler.add(perceived_standardization_screenRoutineEachFrame());
flowScheduler.add(perceived_standardization_screenRoutineEnd());
flowScheduler.add(esg_familiarity_screenRoutineBegin());
flowScheduler.add(esg_familiarity_screenRoutineEachFrame());
flowScheduler.add(esg_familiarity_screenRoutineEnd());
flowScheduler.add(gri_familiarity_screenRoutineBegin());
flowScheduler.add(gri_familiarity_screenRoutineEachFrame());
flowScheduler.add(gri_familiarity_screenRoutineEnd());
flowScheduler.add(investment_experienceRoutineBegin());
flowScheduler.add(investment_experienceRoutineEachFrame());
flowScheduler.add(investment_experienceRoutineEnd());
flowScheduler.add(investment_yearsRoutineBegin());
flowScheduler.add(investment_yearsRoutineEachFrame());
flowScheduler.add(investment_yearsRoutineEnd());
flowScheduler.add(finance_educationRoutineBegin());
flowScheduler.add(finance_educationRoutineEachFrame());
flowScheduler.add(finance_educationRoutineEnd());
flowScheduler.add(demographics_1RoutineBegin());
flowScheduler.add(demographics_1RoutineEachFrame());
flowScheduler.add(demographics_1RoutineEnd());
flowScheduler.add(demographics_2RoutineBegin());
flowScheduler.add(demographics_2RoutineEachFrame());
flowScheduler.add(demographics_2RoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((((('data/' + expInfo['participant']) + '_') + expInfo['session']) + '_') + expInfo['condition']) + '_') + expInfo['date']));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var exp_setupClock;
var condition;
var labels_A;
var labels_B;
var gri_codes;
var values_2024;
var values_2025;
var changes;
var current_labels;
var comprehension_attempts;
var comprehension_error;
var validation_message;
var investment_yes;
var pupil_connected;
var pupil_connection_error;
var pupil_time_offset;
var pupil_pub_port;
var pupil_clock_sync_error;
var send_pupil_annotation;
var instructionClock;
var instruction_title;
var instruction_body;
var instruction_next_button;
var role_instructionClock;
var role_instruction_title;
var role_paragraph_1;
var role_paragraph_2;
var role_paragraph_3;
var role_paragraph_4;
var role_paragraph_5;
var role_instruction_next_button;
var comprehension_checkClock;
var comprehension_check_title;
var check_q1_question;
var check_q1;
var check_q2_question;
var check_q2;
var check_q3_question;
var check_q3;
var comprehension_error_text;
var comprehension_hint;
var check_button;
var stimulus_guidanceClock;
var stimulus_guidance_title;
var stimulus_guidance_body;
var stimulus_guidance_next_button;
var fixationClock;
var fixation_cross;
var stimulus_tableClock;
var table_title;
var table_outer;
var table_header;
var table_vline_1;
var table_vline_2;
var table_vline_3;
var table_vline_4;
var table_vline_5;
var table_hline_01;
var table_hline_02;
var table_hline_03;
var table_hline_04;
var table_hline_05;
var table_hline_06;
var table_hline_07;
var table_hline_08;
var table_hline_09;
var table_hline_10;
var table_hline_11;
var table_hline_12;
var table_hline_13;
var header_Nono;
var header_GRI;
var header_開示項目名;
var header_2024year;
var header_2025year;
var header_変化;
var row_fill_01;
var no_01;
var gri_01;
var label_01;
var value_2024_01;
var value_2025_01;
var change_01;
var no_02;
var gri_02;
var label_02;
var value_2024_02;
var value_2025_02;
var change_02;
var row_fill_03;
var no_03;
var gri_03;
var label_03;
var value_2024_03;
var value_2025_03;
var change_03;
var no_04;
var gri_04;
var label_04;
var value_2024_04;
var value_2025_04;
var change_04;
var row_fill_05;
var no_05;
var gri_05;
var label_05;
var value_2024_05;
var value_2025_05;
var change_05;
var no_06;
var gri_06;
var label_06;
var value_2024_06;
var value_2025_06;
var change_06;
var row_fill_07;
var no_07;
var gri_07;
var label_07;
var value_2024_07;
var value_2025_07;
var change_07;
var no_08;
var gri_08;
var label_08;
var value_2024_08;
var value_2025_08;
var change_08;
var row_fill_09;
var no_09;
var gri_09;
var label_09;
var value_2024_09;
var value_2025_09;
var change_09;
var no_10;
var gri_10;
var label_10;
var value_2024_10;
var value_2025_10;
var change_10;
var row_fill_11;
var no_11;
var gri_11;
var label_11;
var value_2024_11;
var value_2025_11;
var change_11;
var no_12;
var gri_12;
var label_12;
var value_2024_12;
var value_2025_12;
var change_12;
var row_fill_13;
var no_13;
var gri_13;
var label_13;
var value_2024_13;
var value_2025_13;
var change_13;
var stimulus_table_next_button;
var esg_performance_screenClock;
var esg_performance_screen_title;
var esg_performance_question;
var esg_performance;
var esg_performance_left;
var esg_performance_right;
var esg_performance_screen_validation;
var esg_performance_screen_next_button;
var esg_difficulty_screenClock;
var esg_difficulty_screen_title;
var esg_difficulty_question;
var esg_difficulty;
var esg_difficulty_left;
var esg_difficulty_right;
var esg_difficulty_screen_validation;
var esg_difficulty_screen_next_button;
var label_difficulty_screenClock;
var label_difficulty_screen_title;
var label_difficulty_question;
var label_difficulty;
var label_difficulty_left;
var label_difficulty_right;
var label_difficulty_screen_validation;
var label_difficulty_screen_next_button;
var investment_intention_screenClock;
var investment_intention_screen_title;
var investment_intention_question;
var investment_intention;
var investment_intention_left;
var investment_intention_right;
var investment_intention_screen_validation;
var investment_intention_screen_next_button;
var perceived_standardization_screenClock;
var perceived_standardization_screen_title;
var perceived_standardization_question;
var perceived_standardization;
var perceived_standardization_left;
var perceived_standardization_right;
var perceived_standardization_screen_validation;
var perceived_standardization_screen_next_button;
var esg_familiarity_screenClock;
var esg_familiarity_screen_title;
var esg_familiarity_question;
var esg_familiarity;
var esg_familiarity_screen_validation;
var esg_familiarity_screen_next_button;
var gri_familiarity_screenClock;
var gri_familiarity_screen_title;
var gri_familiarity_question;
var gri_familiarity;
var gri_familiarity_screen_validation;
var gri_familiarity_screen_next_button;
var investment_experienceClock;
var investment_experience_title;
var investment_question;
var investment_experience_response;
var investment_experience_validation;
var investment_experience_next_button;
var investment_yearsClock;
var investment_years_title;
var investment_years_question;
var investment_years_response;
var investment_years_validation;
var investment_years_next_button;
var finance_educationClock;
var finance_education_title;
var finance_question;
var finance_education_response;
var finance_education_validation;
var finance_education_next_button;
var demographics_1Clock;
var demographics_1_title;
var age_question;
var age_input_box;
var age_textbox;
var age_input_display;
var age_suffix;
var age_hint;
var gender_question;
var gender;
var demographics_1_validation;
var demographics_1_next_button;
var demographics_2Clock;
var demographics_2_title;
var status_question;
var occupation_attribute;
var occupation_other_question;
var occupation_other_textbox;
var demographics_2_validation;
var demographics_2_next_button;
var endClock;
var end_title;
var end_message;
var finish_button;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "exp_setup"
  exp_setupClock = new util.Clock();
  // Run 'Begin Experiment' code from exp_setup_code
  condition = String(expInfo["condition"] || condition || "A").trim().toUpperCase();
  if (!["A", "B"].includes(condition)) {
      condition = "A";
  }
  expInfo["condition"] = condition;
  labels_A = ["組織内のエネルギー消費量", "エネルギー消費量の削減", "直接的な温室効果ガス（GHG）排出量（スコープ1）", "間接的な温室効果ガス（GHG）排出量（スコープ2）", "温室効果ガス（GHG）排出原単位", "温室効果ガス（GHG）排出量の削減", "発生した廃棄物", "従業員の新規採用者と離職", "育児休業", "労働関連の障害", "従業員一人当たりの年間平均研修時間", "基本給と報酬総額の男女比", "年間報酬総額の比率"];
  labels_B = ["データカバー範囲における総エネルギー消費量", "エネルギー消費量の同一条件比較による前年比変化率", "GHG(CO2)排出量 SCOPE1 (t-CO2)", "GHG排出量（スコープ2）マーケット基準", "1人当たりCO2排出量", "GHG排出量絶対削減率 2020年度比", "廃棄物の非リサイクル量（総処分量）", "新卒採用数・離職率", "育児休業取得人数 合計", "労働災害発生程度数率", "研修時間（本社教育部門管轄）", "男女の賃金差異 全従業員", "代表取締役 社長の報酬と従業員平均給与額の比較"];
  gri_codes = ["302-1", "302-4", "305-1", "305-2", "305-4", "305-5", "306-3", "401-1", "401-3", "403-9", "404-1", "405-2", "2-21"];
  values_2024 = ["239,340 MWh", "2.19%", "3,512 t-CO2e", "128,054 t-CO2e", "4.90 t-CO2", "-20.9%", "14,206 t", "採用63名/離職率2.0%", "624名", "7.01%", "49時間/人", "67.2%", "20.1倍"];
  values_2025 = ["240,704 MWh", "2.32%", "4006 t-CO2e", "128,650 t-CO2e", "4.88 t-CO2", "-27.6%", "14267 t", "採用58名/離職率2.5%", "668名", "6.80%", "44時間/人", "67.8%", "14.5倍"];
  changes = ["+1,364 MWh", "+0.13%", "+494 t-CO2e", "+596 t-CO2e", "-0.02 t-CO2", "-6.7%", "+61 t", "採用-5名/離職率+0.5%", "+44名", "-0.21%", "-5時間/人", "+0.6%", "-5.6倍"];
  current_labels = (condition === "A") ? labels_A : labels_B;
  comprehension_attempts = 0;
  comprehension_error = "";
  validation_message = "";
  investment_yes = false;
  expInfo["screen_width"] = psychoJS.window.size[0];
  expInfo["screen_height"] = psychoJS.window.size[1];
  expInfo["layout_scale"] = Math.min(expInfo["screen_width"] / 1920.0, expInfo["screen_height"] / 1080.0, 1.0);
  // Run 'Begin Experiment' code from pupil_connection
  pupil_connected = false;
  pupil_connection_error = "";
  pupil_time_offset = 0.0;
  pupil_pub_port = "";
  pupil_clock_sync_error = "";
  send_pupil_annotation = function(label, extra) {
      return false;
  };
  expInfo["pupil_connected"] = pupil_connected;
  expInfo["pupil_connection_error"] = pupil_connection_error;
  expInfo["pupil_remote_host"] = "";
  expInfo["pupil_remote_port"] = "";
  expInfo["pupil_pub_port"] = pupil_pub_port;
  expInfo["pupil_time_offset"] = pupil_time_offset;
  expInfo["pupil_clock_sync_error"] = pupil_clock_sync_error;
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instruction_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'instruction_title',
    text: '実験について',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  instruction_body = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'instruction_body',
    text: 'この実験では、企業が開示しているESG情報を確認し、その情報に基づいて企業を評価していただきます。\n\nこの後、ある企業が開示しているESG主要指標が表示されます。表示された項目名と報告値を、ご自身のペースで確認してください。\n\n確認後、表示された情報の内容、企業に対する評価、および投資意向に関する質問に回答していただきます。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 40], draggable: False, height: 29.0,  wrapWidth: 1560.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  instruction_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'instruction_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -2,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  instruction_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "role_instruction"
  role_instructionClock = new util.Clock();
  role_instruction_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'role_instruction_title',
    text: '評価にあたって',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 285], draggable: False, height: 38.0,  wrapWidth: 1480.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  role_paragraph_1 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'role_paragraph_1',
    text: 'あなたは、企業への投資を検討している個人投資家であると想定してください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 185], draggable: False, height: 28.0,  wrapWidth: 1540.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  role_paragraph_2 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'role_paragraph_2',
    text: '次の画面では、ある企業が開示しているESGに関する主要指標が表示されます。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 100], draggable: False, height: 28.0,  wrapWidth: 1540.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -2.0 
  }));
  
  role_paragraph_3 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'role_paragraph_3',
    text: '時間制限はありません。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 15], draggable: False, height: 30.0,  wrapWidth: 1540.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -3.0 
  }));
  
  role_paragraph_4 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'role_paragraph_4',
    text: '表示された項目名と報告値を十分に確認し、内容を理解したうえで次に進んでください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 75)], draggable: False, height: 28.0,  wrapWidth: 1540.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -4.0 
  }));
  
  role_paragraph_5 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'role_paragraph_5',
    text: 'その後、表示された情報に基づいて、企業に対する評価や投資意向などについて回答していただきます。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 165)], draggable: False, height: 28.0,  wrapWidth: 1540.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -5.0 
  }));
  
  role_instruction_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'role_instruction_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 285)],
    size: [160, 50],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -6,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  role_instruction_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "comprehension_check"
  comprehension_checkClock = new util.Clock();
  comprehension_check_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'comprehension_check_title',
    text: '説明内容の確認',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 420], draggable: False, height: 42.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  check_q1_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'check_q1_question',
    text: 'Q1\u3000この実験で、あなたはどの立場で企業情報を確認しますか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 340], draggable: False, height: 29.0,  wrapWidth: 1440.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  check_q1 = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'check_q1',
    startValue: undefined,
    size: [1260, 70], pos: [0, 260], ori: 0.0, units: psychoJS.window.units,
    labels: ['個人投資家', '企業の従業員', '政府の規制担当者'], fontSize: 20.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  check_q2_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'check_q2_question',
    text: 'Q2\u3000この実験で、あなたに求められている課題は何ですか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 130], draggable: False, height: 29.0,  wrapWidth: 1440.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -3.0 
  }));
  
  check_q2 = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'check_q2',
    startValue: undefined,
    size: [1260, 70], pos: [0, 50], ori: 0.0, units: psychoJS.window.units,
    labels: ['広告表現を評価する', 'ESG項目名と報告値を確認・理解する', '他社情報を検索・比較する'], fontSize: 18.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -4, 
    flip: false,
  }));
  
  check_q3_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'check_q3_question',
    text: 'Q3\u3000ESG情報を確認した後、何について回答しますか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, (- 85)], draggable: False, height: 29.0,  wrapWidth: 1440.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -5.0 
  }));
  
  check_q3 = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'check_q3',
    startValue: undefined,
    size: [1260, 70], pos: [0, (- 165)], ori: 0.0, units: psychoJS.window.units,
    labels: ['理解・企業評価・投資意向', 'ESG用語の暗記', '説明方法'], fontSize: 18.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -6, 
    flip: false,
  }));
  
  comprehension_error_text = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'comprehension_error_text',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 290)], draggable: False, height: 18.0,  wrapWidth: 1300.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -7.0 
  }));
  
  comprehension_hint = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'comprehension_hint',
    text: '3問すべてを選択してから、「回答を確認」を押してください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 315)], draggable: False, height: 19.0,  wrapWidth: 1300.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#526070'),  opacity: undefined,
    depth: -8.0 
  }));
  
  check_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'check_button',
    text: '回答を確認',
    font: 'Meiryo',
    pos: [0, (- 420)],
    size: [230, 56],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -10,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  check_button.clock = new util.Clock();
  
  // Initialize components for Routine "stimulus_guidance"
  stimulus_guidanceClock = new util.Clock();
  stimulus_guidance_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'stimulus_guidance_title',
    text: 'ESG主要指標の確認',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  stimulus_guidance_body = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'stimulus_guidance_body',
    text: '次の画面では、株式会社Aの2025年度および2024年度の報告書から抜粋したESG主要指標が表示されます。\n\nあわせて、2024年度から2025年度にかけて数値がどのように変化したかも示します。\n「＋」は前年からの増加、「ー」は前年からの減少を表しています。\nただし、増加や減少の記号だけで、その変化が望ましいかどうかを判断するものではありません。\n\n表示された項目名、報告値、変化の内容を確認し、指標が何を示しているかを考えながらご覧ください。\n\n確認後、この企業のESG面での全体的なパフォーマンスについて評価していただきます。\n表は、ご自身のペースで確認してください。\n「次へ」を押すと、表には戻れません。\n十分に確認してから、次へ進んでください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 40], draggable: False, height: 29.0,  wrapWidth: 1560.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  stimulus_guidance_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'stimulus_guidance_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -2,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  stimulus_guidance_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_cross = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'fixation_cross',
    text: '＋',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 0], draggable: False, height: 72.0,  wrapWidth: 180.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  // Initialize components for Routine "stimulus_table"
  stimulus_tableClock = new util.Clock();
  table_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'table_title',
    text: '株式会社A\u3000ESG主要指標（2025年度・2024年度）',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 485], draggable: False, height: 34.0,  wrapWidth: 1800.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  table_outer = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'table_outer', units : 'pix', 
    width: [1800, 760][0], height: [1800, 760][1],
    ori: 0.0, 
    pos: [0, 30.0], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('#3E6591'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  }));
  
  table_header = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'table_header', units : 'pix', 
    width: [1800, 56][0], height: [1800, 56][1],
    ori: 0.0, 
    pos: [0, 382], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#3E6591'), 
    fillColor: new util.Color('#3E6591'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  }));
  
  table_vline_1 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_vline_1', units : 'pix', 
    vertices: [[-[1, 760][0]/2.0, 0], [+[1, 760][0]/2.0, 0]],
    ori: 0.0, 
    pos: [(- 820), 30.0], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#8FA5BC'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  }));
  
  table_vline_2 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_vline_2', units : 'pix', 
    vertices: [[-[1, 760][0]/2.0, 0], [+[1, 760][0]/2.0, 0]],
    ori: 0.0, 
    pos: [(- 680), 30.0], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#8FA5BC'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  }));
  
  table_vline_3 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_vline_3', units : 'pix', 
    vertices: [[-[1, 760][0]/2.0, 0], [+[1, 760][0]/2.0, 0]],
    ori: 0.0, 
    pos: [100, 30.0], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#8FA5BC'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  }));
  
  table_vline_4 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_vline_4', units : 'pix', 
    vertices: [[-[1, 760][0]/2.0, 0], [+[1, 760][0]/2.0, 0]],
    ori: 0.0, 
    pos: [370, 30.0], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#8FA5BC'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  }));
  
  table_vline_5 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_vline_5', units : 'pix', 
    vertices: [[-[1, 760][0]/2.0, 0], [+[1, 760][0]/2.0, 0]],
    ori: 0.0, 
    pos: [640, 30.0], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#8FA5BC'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -8, 
    interpolate: true, 
  }));
  
  table_hline_01 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_01', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, 299.84615384615387], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -9, 
    interpolate: true, 
  }));
  
  table_hline_02 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_02', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, 245.69230769230768], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  }));
  
  table_hline_03 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_03', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, 191.53846153846155], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -11, 
    interpolate: true, 
  }));
  
  table_hline_04 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_04', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, 137.3846153846154], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -12, 
    interpolate: true, 
  }));
  
  table_hline_05 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_05', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, 83.23076923076923], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -13, 
    interpolate: true, 
  }));
  
  table_hline_06 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_06', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, 29.076923076923094], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -14, 
    interpolate: true, 
  }));
  
  table_hline_07 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_07', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 25.076923076923094)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -15, 
    interpolate: true, 
  }));
  
  table_hline_08 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_08', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 79.23076923076923)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -16, 
    interpolate: true, 
  }));
  
  table_hline_09 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_09', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 133.38461538461536)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -17, 
    interpolate: true, 
  }));
  
  table_hline_10 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_10', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 187.53846153846155)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -18, 
    interpolate: true, 
  }));
  
  table_hline_11 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_11', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 241.69230769230774)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -19, 
    interpolate: true, 
  }));
  
  table_hline_12 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_12', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 295.8461538461538)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -20, 
    interpolate: true, 
  }));
  
  table_hline_13 = new visual.ShapeStim (scaleVisualOptions({
    win: psychoJS.window, name: 'table_hline_13', units : 'pix', 
    vertices: [[-[1800, 1][0]/2.0, 0], [+[1800, 1][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0, (- 350.0)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('#B5C2D0'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -21, 
    interpolate: true, 
  }));
  
  header_Nono = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'header_Nono',
    text: 'No.',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 382], draggable: False, height: 22.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -22.0 
  }));
  
  header_GRI = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'header_GRI',
    text: 'GRI',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 382], draggable: False, height: 22.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -23.0 
  }));
  
  header_開示項目名 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'header_開示項目名',
    text: '開示項目名',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 382], draggable: False, height: 22.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -24.0 
  }));
  
  header_2024year = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'header_2024year',
    text: '2024年度',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 382], draggable: False, height: 22.0,  wrapWidth: 260.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -25.0 
  }));
  
  header_2025year = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'header_2025year',
    text: '2025年度',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 382], draggable: False, height: 22.0,  wrapWidth: 260.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -26.0 
  }));
  
  header_変化 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'header_変化',
    text: '変化',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 382], draggable: False, height: 22.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -27.0 
  }));
  
  row_fill_01 = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'row_fill_01', units : 'pix', 
    width: [1798, 54.15384615384615][0], height: [1798, 54.15384615384615][1],
    ori: 0.0, 
    pos: [0, 326.9230769230769], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: undefined, 
    fillColor: new util.Color('#E7EEF7'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -28, 
    interpolate: true, 
  }));
  
  no_01 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_01',
    text: '1',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 326.9230769230769], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -29.0 
  }));
  
  gri_01 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_01',
    text: '302-1',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 326.9230769230769], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -30.0 
  }));
  
  label_01 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_01',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 326.9230769230769], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -31.0 
  }));
  
  value_2024_01 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_01',
    text: '239,340 MWh',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 326.9230769230769], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -32.0 
  }));
  
  value_2025_01 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_01',
    text: '240,704 MWh',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 326.9230769230769], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -33.0 
  }));
  
  change_01 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_01',
    text: '+1,364 MWh',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 326.9230769230769], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -34.0 
  }));
  
  no_02 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_02',
    text: '2',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 272.7692307692308], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -35.0 
  }));
  
  gri_02 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_02',
    text: '302-4',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 272.7692307692308], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -36.0 
  }));
  
  label_02 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_02',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 272.7692307692308], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -37.0 
  }));
  
  value_2024_02 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_02',
    text: '2.19%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 272.7692307692308], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -38.0 
  }));
  
  value_2025_02 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_02',
    text: '2.32%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 272.7692307692308], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -39.0 
  }));
  
  change_02 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_02',
    text: '+0.13%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 272.7692307692308], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -40.0 
  }));
  
  row_fill_03 = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'row_fill_03', units : 'pix', 
    width: [1798, 54.15384615384615][0], height: [1798, 54.15384615384615][1],
    ori: 0.0, 
    pos: [0, 218.6153846153846], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: undefined, 
    fillColor: new util.Color('#E7EEF7'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -41, 
    interpolate: true, 
  }));
  
  no_03 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_03',
    text: '3',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 218.6153846153846], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -42.0 
  }));
  
  gri_03 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_03',
    text: '305-1',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 218.6153846153846], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -43.0 
  }));
  
  label_03 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_03',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 218.6153846153846], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -44.0 
  }));
  
  value_2024_03 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_03',
    text: '3,512 t-CO2e',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 218.6153846153846], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -45.0 
  }));
  
  value_2025_03 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_03',
    text: '4006 t-CO2e',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 218.6153846153846], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -46.0 
  }));
  
  change_03 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_03',
    text: '+494 t-CO2e',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 218.6153846153846], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -47.0 
  }));
  
  no_04 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_04',
    text: '4',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 164.46153846153845], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -48.0 
  }));
  
  gri_04 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_04',
    text: '305-2',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 164.46153846153845], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -49.0 
  }));
  
  label_04 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_04',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 164.46153846153845], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -50.0 
  }));
  
  value_2024_04 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_04',
    text: '128,054 t-CO2e',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 164.46153846153845], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -51.0 
  }));
  
  value_2025_04 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_04',
    text: '128,650 t-CO2e',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 164.46153846153845], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -52.0 
  }));
  
  change_04 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_04',
    text: '+596 t-CO2e',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 164.46153846153845], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -53.0 
  }));
  
  row_fill_05 = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'row_fill_05', units : 'pix', 
    width: [1798, 54.15384615384615][0], height: [1798, 54.15384615384615][1],
    ori: 0.0, 
    pos: [0, 110.30769230769232], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: undefined, 
    fillColor: new util.Color('#E7EEF7'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -54, 
    interpolate: true, 
  }));
  
  no_05 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_05',
    text: '5',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 110.30769230769232], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -55.0 
  }));
  
  gri_05 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_05',
    text: '305-4',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 110.30769230769232], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -56.0 
  }));
  
  label_05 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_05',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 110.30769230769232], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -57.0 
  }));
  
  value_2024_05 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_05',
    text: '4.90 t-CO2',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 110.30769230769232], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -58.0 
  }));
  
  value_2025_05 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_05',
    text: '4.88 t-CO2',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 110.30769230769232], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -59.0 
  }));
  
  change_05 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_05',
    text: '-0.02 t-CO2',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 110.30769230769232], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -60.0 
  }));
  
  no_06 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_06',
    text: '6',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 56.15384615384613], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -61.0 
  }));
  
  gri_06 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_06',
    text: '305-5',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 56.15384615384613], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -62.0 
  }));
  
  label_06 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_06',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 56.15384615384613], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -63.0 
  }));
  
  value_2024_06 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_06',
    text: '-20.9%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 56.15384615384613], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -64.0 
  }));
  
  value_2025_06 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_06',
    text: '-27.6%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 56.15384615384613], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -65.0 
  }));
  
  change_06 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_06',
    text: '-6.7%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 56.15384615384613], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -66.0 
  }));
  
  row_fill_07 = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'row_fill_07', units : 'pix', 
    width: [1798, 54.15384615384615][0], height: [1798, 54.15384615384615][1],
    ori: 0.0, 
    pos: [0, 2.0], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: undefined, 
    fillColor: new util.Color('#E7EEF7'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -67, 
    interpolate: true, 
  }));
  
  no_07 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_07',
    text: '7',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), 2.0], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -68.0 
  }));
  
  gri_07 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_07',
    text: '306-3',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), 2.0], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -69.0 
  }));
  
  label_07 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_07',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), 2.0], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -70.0 
  }));
  
  value_2024_07 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_07',
    text: '14,206 t',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, 2.0], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -71.0 
  }));
  
  value_2025_07 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_07',
    text: '14267 t',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, 2.0], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -72.0 
  }));
  
  change_07 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_07',
    text: '+61 t',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, 2.0], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -73.0 
  }));
  
  no_08 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_08',
    text: '8',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), (- 52.15384615384613)], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -74.0 
  }));
  
  gri_08 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_08',
    text: '401-1',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), (- 52.15384615384613)], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -75.0 
  }));
  
  label_08 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_08',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), (- 52.15384615384613)], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -76.0 
  }));
  
  value_2024_08 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_08',
    text: '採用63名/離職率2.0%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, (- 52.15384615384613)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -77.0 
  }));
  
  value_2025_08 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_08',
    text: '採用58名/離職率2.5%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, (- 52.15384615384613)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -78.0 
  }));
  
  change_08 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_08',
    text: '採用-5名/離職率+0.5%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, (- 52.15384615384613)], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -79.0 
  }));
  
  row_fill_09 = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'row_fill_09', units : 'pix', 
    width: [1798, 54.15384615384615][0], height: [1798, 54.15384615384615][1],
    ori: 0.0, 
    pos: [0, (- 106.30769230769232)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: undefined, 
    fillColor: new util.Color('#E7EEF7'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -80, 
    interpolate: true, 
  }));
  
  no_09 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_09',
    text: '9',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), (- 106.30769230769232)], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -81.0 
  }));
  
  gri_09 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_09',
    text: '401-3',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), (- 106.30769230769232)], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -82.0 
  }));
  
  label_09 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_09',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), (- 106.30769230769232)], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -83.0 
  }));
  
  value_2024_09 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_09',
    text: '624名',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, (- 106.30769230769232)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -84.0 
  }));
  
  value_2025_09 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_09',
    text: '668名',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, (- 106.30769230769232)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -85.0 
  }));
  
  change_09 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_09',
    text: '+44名',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, (- 106.30769230769232)], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -86.0 
  }));
  
  no_10 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_10',
    text: '10',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), (- 160.46153846153845)], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -87.0 
  }));
  
  gri_10 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_10',
    text: '403-9',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), (- 160.46153846153845)], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -88.0 
  }));
  
  label_10 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_10',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), (- 160.46153846153845)], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -89.0 
  }));
  
  value_2024_10 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_10',
    text: '7.01%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, (- 160.46153846153845)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -90.0 
  }));
  
  value_2025_10 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_10',
    text: '6.80%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, (- 160.46153846153845)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -91.0 
  }));
  
  change_10 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_10',
    text: '-0.21%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, (- 160.46153846153845)], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -92.0 
  }));
  
  row_fill_11 = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'row_fill_11', units : 'pix', 
    width: [1798, 54.15384615384615][0], height: [1798, 54.15384615384615][1],
    ori: 0.0, 
    pos: [0, (- 214.61538461538464)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: undefined, 
    fillColor: new util.Color('#E7EEF7'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -93, 
    interpolate: true, 
  }));
  
  no_11 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_11',
    text: '11',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), (- 214.61538461538464)], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -94.0 
  }));
  
  gri_11 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_11',
    text: '404-1',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), (- 214.61538461538464)], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -95.0 
  }));
  
  label_11 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_11',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), (- 214.61538461538464)], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -96.0 
  }));
  
  value_2024_11 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_11',
    text: '49時間/人',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, (- 214.61538461538464)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -97.0 
  }));
  
  value_2025_11 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_11',
    text: '44時間/人',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, (- 214.61538461538464)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -98.0 
  }));
  
  change_11 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_11',
    text: '-5時間/人',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, (- 214.61538461538464)], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -99.0 
  }));
  
  no_12 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_12',
    text: '12',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), (- 268.7692307692307)], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -100.0 
  }));
  
  gri_12 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_12',
    text: '405-2',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), (- 268.7692307692307)], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -101.0 
  }));
  
  label_12 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_12',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), (- 268.7692307692307)], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -102.0 
  }));
  
  value_2024_12 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_12',
    text: '67.2%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, (- 268.7692307692307)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -103.0 
  }));
  
  value_2025_12 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_12',
    text: '67.8%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, (- 268.7692307692307)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -104.0 
  }));
  
  change_12 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_12',
    text: '+0.6%',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, (- 268.7692307692307)], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -105.0 
  }));
  
  row_fill_13 = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'row_fill_13', units : 'pix', 
    width: [1798, 54.15384615384615][0], height: [1798, 54.15384615384615][1],
    ori: 0.0, 
    pos: [0, (- 322.9230769230769)], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: undefined, 
    fillColor: new util.Color('#E7EEF7'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -106, 
    interpolate: true, 
  }));
  
  no_13 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'no_13',
    text: '13',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 860), (- 322.9230769230769)], draggable: False, height: 20.0,  wrapWidth: 78.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -107.0 
  }));
  
  gri_13 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_13',
    text: '2-21',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 750), (- 322.9230769230769)], draggable: False, height: 20.0,  wrapWidth: 135.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -108.0 
  }));
  
  label_13 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_13',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 290), (- 322.9230769230769)], draggable: False, height: 21.0,  wrapWidth: 760.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -109.0 
  }));
  
  value_2024_13 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2024_13',
    text: '20.1倍',
    font: 'Meiryo',
    units: 'pix', 
    pos: [235, (- 322.9230769230769)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -110.0 
  }));
  
  value_2025_13 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'value_2025_13',
    text: '14.5倍',
    font: 'Meiryo',
    units: 'pix', 
    pos: [505, (- 322.9230769230769)], draggable: False, height: 20.0,  wrapWidth: 255.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -111.0 
  }));
  
  change_13 = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'change_13',
    text: '-5.6倍',
    font: 'Meiryo',
    units: 'pix', 
    pos: [770, (- 322.9230769230769)], draggable: False, height: 20.0,  wrapWidth: 245.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -112.0 
  }));
  
  stimulus_table_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'stimulus_table_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [780, (- 455)],
    size: [150, 52],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -114,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  stimulus_table_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "esg_performance_screen"
  esg_performance_screenClock = new util.Clock();
  esg_performance_screen_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_performance_screen_title',
    text: 'ESGパフォーマンス評価',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  esg_performance_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_performance_question',
    text: '提示された情報を踏まえて、この企業のESGパフォーマンスを総合的に評価してください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 240], draggable: False, height: 31.0,  wrapWidth: 1600.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  esg_performance = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'esg_performance',
    startValue: undefined,
    size: [1450, 90], pos: [0, 20], ori: 0.0, units: psychoJS.window.units,
    labels: ['0', '', '', '', '20', '', '', '', '40', '', '', '', '60', '', '', '', '80', '', '', '', '100'], fontSize: 24.0, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    granularity: 5.0, style: ['SLIDER'],
    color: new util.Color('#E6ECF3'), markerColor: new util.Color('#1F5D99'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  esg_performance_left = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_performance_left',
    text: '0 = 非常に低い',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 375.0), 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -3.0 
  }));
  
  esg_performance_right = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_performance_right',
    text: '100 = 非常に高い',
    font: 'Meiryo',
    units: 'pix', 
    pos: [375.0, 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -4.0 
  }));
  
  esg_performance_screen_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_performance_screen_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -5.0 
  }));
  
  esg_performance_screen_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_performance_screen_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -7,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  esg_performance_screen_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "esg_difficulty_screen"
  esg_difficulty_screenClock = new util.Clock();
  esg_difficulty_screen_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_difficulty_screen_title',
    text: 'ESG情報評価の難易度',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  esg_difficulty_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_difficulty_question',
    text: '提示されたESG情報をもとに、この企業の社会面および環境面のパフォーマンスを評価することは、どの程度難しかったですか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 240], draggable: False, height: 31.0,  wrapWidth: 1600.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  esg_difficulty = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'esg_difficulty',
    startValue: undefined,
    size: [1450, 90], pos: [0, 20], ori: 0.0, units: psychoJS.window.units,
    labels: ['0', '', '', '', '20', '', '', '', '40', '', '', '', '60', '', '', '', '80', '', '', '', '100'], fontSize: 24.0, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    granularity: 5.0, style: ['SLIDER'],
    color: new util.Color('#E6ECF3'), markerColor: new util.Color('#1F5D99'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  esg_difficulty_left = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_difficulty_left',
    text: '0 = 全く難しくなかった',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 375.0), 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -3.0 
  }));
  
  esg_difficulty_right = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_difficulty_right',
    text: '100 = 非常に難しかった',
    font: 'Meiryo',
    units: 'pix', 
    pos: [375.0, 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -4.0 
  }));
  
  esg_difficulty_screen_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_difficulty_screen_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -5.0 
  }));
  
  esg_difficulty_screen_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_difficulty_screen_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -7,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  esg_difficulty_screen_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "label_difficulty_screen"
  label_difficulty_screenClock = new util.Clock();
  label_difficulty_screen_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_difficulty_screen_title',
    text: 'ESG項目名の理解の難易度',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  label_difficulty_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_difficulty_question',
    text: '表示された各ESG項目名の意味を理解することは、どの程度難しかったですか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 240], draggable: False, height: 31.0,  wrapWidth: 1600.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  label_difficulty = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'label_difficulty',
    startValue: undefined,
    size: [1450, 90], pos: [0, 20], ori: 0.0, units: psychoJS.window.units,
    labels: ['0', '', '', '', '20', '', '', '', '40', '', '', '', '60', '', '', '', '80', '', '', '', '100'], fontSize: 24.0, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    granularity: 5.0, style: ['SLIDER'],
    color: new util.Color('#E6ECF3'), markerColor: new util.Color('#1F5D99'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  label_difficulty_left = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_difficulty_left',
    text: '0 = 全く難しくなかった',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 375.0), 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -3.0 
  }));
  
  label_difficulty_right = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_difficulty_right',
    text: '100 = 非常に難しかった',
    font: 'Meiryo',
    units: 'pix', 
    pos: [375.0, 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -4.0 
  }));
  
  label_difficulty_screen_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_difficulty_screen_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -5.0 
  }));
  
  label_difficulty_screen_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'label_difficulty_screen_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -7,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  label_difficulty_screen_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "investment_intention_screen"
  investment_intention_screenClock = new util.Clock();
  investment_intention_screen_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_intention_screen_title',
    text: '投資意向',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  investment_intention_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_intention_question',
    text: 'この企業にどの程度投資したいと思いますか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 240], draggable: False, height: 31.0,  wrapWidth: 1600.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  investment_intention = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'investment_intention',
    startValue: undefined,
    size: [1450, 90], pos: [0, 20], ori: 0.0, units: psychoJS.window.units,
    labels: ['0', '', '', '', '20', '', '', '', '40', '', '', '', '60', '', '', '', '80', '', '', '', '100'], fontSize: 24.0, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    granularity: 5.0, style: ['SLIDER'],
    color: new util.Color('#E6ECF3'), markerColor: new util.Color('#1F5D99'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  investment_intention_left = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_intention_left',
    text: '0 = 全く投資したくない',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 375.0), 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -3.0 
  }));
  
  investment_intention_right = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_intention_right',
    text: '100 = 非常に投資したい',
    font: 'Meiryo',
    units: 'pix', 
    pos: [375.0, 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -4.0 
  }));
  
  investment_intention_screen_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_intention_screen_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -5.0 
  }));
  
  investment_intention_screen_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_intention_screen_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -7,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  investment_intention_screen_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "perceived_standardization_screen"
  perceived_standardization_screenClock = new util.Clock();
  perceived_standardization_screen_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'perceived_standardization_screen_title',
    text: '項目名の標準化について',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  perceived_standardization_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'perceived_standardization_question',
    text: '表示されたESG項目名は、統一された基準やルールがあると感じましたか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 240], draggable: False, height: 31.0,  wrapWidth: 1600.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  perceived_standardization = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'perceived_standardization',
    startValue: undefined,
    size: [1450, 90], pos: [0, 20], ori: 0.0, units: psychoJS.window.units,
    labels: ['0', '', '', '', '20', '', '', '', '40', '', '', '', '60', '', '', '', '80', '', '', '', '100'], fontSize: 24.0, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    granularity: 5.0, style: ['SLIDER'],
    color: new util.Color('#E6ECF3'), markerColor: new util.Color('#1F5D99'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  perceived_standardization_left = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'perceived_standardization_left',
    text: '0 = 全くそう感じなかった',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 375.0), 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -3.0 
  }));
  
  perceived_standardization_right = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'perceived_standardization_right',
    text: '100 = 非常にそう感じた',
    font: 'Meiryo',
    units: 'pix', 
    pos: [375.0, 125], draggable: False, height: 22.0,  wrapWidth: 650.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -4.0 
  }));
  
  perceived_standardization_screen_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'perceived_standardization_screen_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -5.0 
  }));
  
  perceived_standardization_screen_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'perceived_standardization_screen_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -7,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  perceived_standardization_screen_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "esg_familiarity_screen"
  esg_familiarity_screenClock = new util.Clock();
  esg_familiarity_screen_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_familiarity_screen_title',
    text: 'ESG 馴染み',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  esg_familiarity_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_familiarity_question',
    text: 'ESG情報について、どの程度知っていますか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 250], draggable: False, height: 31.0,  wrapWidth: 1600.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  esg_familiarity = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'esg_familiarity',
    startValue: undefined,
    size: [1400, 120], pos: [0, 20], ori: 0.0, units: psychoJS.window.units,
    labels: ['1\n全く知らない', '2', '3', '4', '5', '6', '7\n非常によく知っている'], fontSize: 24.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  esg_familiarity_screen_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_familiarity_screen_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -3.0 
  }));
  
  esg_familiarity_screen_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'esg_familiarity_screen_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -5,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  esg_familiarity_screen_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "gri_familiarity_screen"
  gri_familiarity_screenClock = new util.Clock();
  gri_familiarity_screen_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_familiarity_screen_title',
    text: 'GRI 馴染み',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  gri_familiarity_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_familiarity_question',
    text: 'GRIスタンダードについて、どの程度知っていますか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 250], draggable: False, height: 31.0,  wrapWidth: 1600.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  gri_familiarity = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'gri_familiarity',
    startValue: undefined,
    size: [1400, 120], pos: [0, 20], ori: 0.0, units: psychoJS.window.units,
    labels: ['1\n全く知らない', '2', '3', '4', '5', '6', '7\n非常によく知っている'], fontSize: 24.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  gri_familiarity_screen_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_familiarity_screen_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -3.0 
  }));
  
  gri_familiarity_screen_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gri_familiarity_screen_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -5,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  gri_familiarity_screen_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "investment_experience"
  investment_experienceClock = new util.Clock();
  investment_experience_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_experience_title',
    text: '投資経験',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  investment_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_question',
    text: 'Q1\u3000これまでに、金融商品の投資経験はありますか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 250], draggable: False, height: 27.0,  wrapWidth: 1520.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  investment_experience_response = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'investment_experience_response',
    startValue: undefined,
    size: [700, 90], pos: [0, 95], ori: 0.0, units: psychoJS.window.units,
    labels: ['はい', 'いいえ'], fontSize: 25.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  investment_experience_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_experience_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 250)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -3.0 
  }));
  
  investment_experience_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_experience_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 360)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -5,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  investment_experience_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "investment_years"
  investment_yearsClock = new util.Clock();
  investment_years_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_years_title',
    text: '投資経験',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  investment_years_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_years_question',
    text: 'Q2\u3000投資経験年数はどのくらいですか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 250], draggable: False, height: 27.0,  wrapWidth: 1520.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  investment_years_response = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'investment_years_response',
    startValue: undefined,
    size: [1250, 100], pos: [0, 95], ori: 0.0, units: psychoJS.window.units,
    labels: ['1年未満', '1年以上5年未満', '5年以上10年未満', '10年以上'], fontSize: 25.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#172033'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  investment_years_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_years_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 250)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -3.0 
  }));
  
  investment_years_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'investment_years_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 360)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -5,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  investment_years_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "finance_education"
  finance_educationClock = new util.Clock();
  finance_education_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'finance_education_title',
    text: '会計・金融の学習経験',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  finance_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'finance_question',
    text: 'Q1\u3000大学の授業等で、会計・財務・投資のいずれかについて学んだ経験はありますか。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 300], draggable: False, height: 28.0,  wrapWidth: 1520.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  finance_education_response = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'finance_education_response',
    startValue: undefined,
    size: [760, 90], pos: [0, 195], ori: 0.0, units: psychoJS.window.units,
    labels: ['はい', 'いいえ'], fontSize: 25.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  finance_education_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'finance_education_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -3.0 
  }));
  
  finance_education_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'finance_education_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 430)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -5,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  finance_education_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "demographics_1"
  demographics_1Clock = new util.Clock();
  demographics_1_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'demographics_1_title',
    text: '基本属性（1/2）',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  age_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'age_question',
    text: 'Q1\u3000年齢を選択してください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 315], draggable: False, height: 29.0,  wrapWidth: 1200.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  age_input_box = new visual.Rect (scaleVisualOptions({
    win: psychoJS.window, name: 'age_input_box', units : 'pix', 
    width: [260, 65][0], height: [260, 65][1],
    ori: 0.0, 
    pos: [(- 350), 190], 
    draggable: False, 
    anchor: 'center', 
    lineWidth: 2.0, 
    lineColor: new util.Color('#8A98A8'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -2, 
    interpolate: true, 
  }));
  
  age_textbox = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'age_textbox',
    startValue: undefined,
    size: [1450, 90], pos: [0, 205], ori: 0.0, units: psychoJS.window.units,
    labels: ['10-19歳', '20-29歳', '30-39歳', '40-49歳', '50-59歳', '60-69歳', '70歳以上'], fontSize: 22.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -3, 
    flip: false,
  }));
  
  age_input_display = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'age_input_display',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 350), 190], draggable: False, height: 30.0,  wrapWidth: 240.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: 0.0,
    depth: -4.0 
  }));
  
  age_suffix = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'age_suffix',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 145.0), 190], draggable: False, height: 27.0,  wrapWidth: 80.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -5.0 
  }));
  
  age_hint = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'age_hint',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [(- 210.0), 135], draggable: False, height: 16.0,  wrapWidth: 1100.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#526070'),  opacity: undefined,
    depth: -6.0 
  }));
  
  gender_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'gender_question',
    text: 'Q2\u3000性別を選択してください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 45], draggable: False, height: 29.0,  wrapWidth: 1200.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -7.0 
  }));
  
  gender = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'gender',
    startValue: undefined,
    size: [1250, 100], pos: [0, (- 80)], ori: 0.0, units: psychoJS.window.units,
    labels: ['男性', '女性', 'その他', '回答しない'], fontSize: 22.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -8, 
    flip: false,
  }));
  
  demographics_1_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'demographics_1_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 370)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -9.0 
  }));
  
  demographics_1_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'demographics_1_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 450)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -12,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  demographics_1_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "demographics_2"
  demographics_2Clock = new util.Clock();
  demographics_2_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'demographics_2_title',
    text: '基本属性（2/2）',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  status_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'status_question',
    text: 'Q\u3000現在のご職業・属性について、最も当てはまるものを1つお選びください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 300], draggable: False, height: 28.0,  wrapWidth: 700.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  occupation_attribute = new visual.Slider(scaleVisualOptions({
    win: psychoJS.window, name: 'occupation_attribute',
    startValue: undefined,
    size: [1550, 95], pos: [0, 160], ori: 0.0, units: psychoJS.window.units,
    labels: ['会社員', '公務員', '教員', '自営業・自由業', 'パート・アルバイト', '専業主婦・主夫', '学生', '無職', 'その他'], fontSize: 23.0, ticks: [],
    granularity: 1, style: ['RADIO'],
    color: new util.Color('#172033'), markerColor: new util.Color('#3E6591'), lineColor: new util.Color('#9FB2C8'), 
    opacity: undefined, fontFamily: 'Meiryo', bold: true, italic: false, depth: -2, 
    flip: false,
  }));
  
  occupation_other_question = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'occupation_other_question',
    text: '「その他」を選択した方は、具体的に入力してください。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 10)], draggable: False, height: 26.0,  wrapWidth: 900.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: 0.0,
    depth: -3.0 
  }));
  
  occupation_other_textbox = new visual.TextBox(scaleVisualOptions({
    win: psychoJS.window,
    name: 'occupation_other_textbox',
    text: '',
    placeholder: undefined,
    font: 'Meiryo',
    pos: [0, (- 105)], 
    draggable: False,
    letterHeight: 26.0,
    lineSpacing: 1.05,
    size: [760, 62],  units: 'pix', 
    ori: 0.0,
    color: '#172033', colorSpace: 'rgb',
    fillColor: 'white', borderColor: '#8A98A8',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: 0.0,
    padding: 6.0,
    alignment: 'center',
    overflow: 'hidden',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  }));
  
  demographics_2_validation = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'demographics_2_validation',
    text: '',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, (- 330)], draggable: False, height: 22.0,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#B42318'),  opacity: undefined,
    depth: -5.0 
  }));
  
  demographics_2_next_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'demographics_2_next_button',
    text: '次へ',
    font: 'Meiryo',
    pos: [0, (- 430)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -7,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  demographics_2_next_button.clock = new util.Clock();
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_title = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'end_title',
    text: '実験終了',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0.0, 470], draggable: False, height: 36.0,  wrapWidth: 1640.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: 0.0 
  }));
  
  end_message = new visual.TextStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'end_message',
    text: 'ご協力いただき、ありがとうございます。',
    font: 'Meiryo',
    units: 'pix', 
    pos: [0, 70], draggable: False, height: 36.0,  wrapWidth: 1450.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('#172033'),  opacity: undefined,
    depth: -1.0 
  }));
  
  finish_button = new visual.ButtonStim(scaleVisualOptions({
    win: psychoJS.window,
    name: 'finish_button',
    text: '終了',
    font: 'Meiryo',
    pos: [0, (- 320)],
    size: [190, 62],
    padding: 8.0,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: '#3E6591',
    borderColor: '#3E6591',
    colorSpace: 'rgb',
    borderWidth: 2.0,
    opacity: None,
    depth: -2,
    letterHeight: 24.0,
    bold: true,
    italic: false,
  }));
  finish_button.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var exp_setupMaxDurationReached;
var exp_setupMaxDuration;
var exp_setupComponents;
function exp_setupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_setup' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    exp_setupClock.reset(routineTimer.getTime());
    routineTimer.add(0.050000);
    exp_setupMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp_setup.started', globalClock.getTime());
    exp_setupMaxDuration = 0.05
    // keep track of which components have finished
    exp_setupComponents = [];
    
    for (const thisComponent of exp_setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_setupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_setup' ---
    // get current time
    t = exp_setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > exp_setupMaxDuration) {
        exp_setupMaxDurationReached = true
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
    for (const thisComponent of exp_setupComponents)
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


function exp_setupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_setup' ---
    for (const thisComponent of exp_setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_setup.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (exp_setupMaxDurationReached) {
        exp_setupClock.add(exp_setupMaxDuration);
    } else {
        exp_setupClock.add(0.050000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionMaxDurationReached;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset instruction_next_button to account for continued clicks & clear times on/off
    instruction_next_button.reset()
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = None
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instruction_title);
    instructionComponents.push(instruction_body);
    instructionComponents.push(instruction_next_button);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_title* updates
    if (t >= 0.0 && instruction_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_title.tStart = t;  // (not accounting for frame time here)
      instruction_title.frameNStart = frameN;  // exact frame index
      
      instruction_title.setAutoDraw(true);
    }
    
    
    // if instruction_title is active this frame...
    if (instruction_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instruction_body* updates
    if (t >= 0.0 && instruction_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_body.tStart = t;  // (not accounting for frame time here)
      instruction_body.frameNStart = frameN;  // exact frame index
      
      instruction_body.setAutoDraw(true);
    }
    
    
    // if instruction_body is active this frame...
    if (instruction_body.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instruction_next_button* updates
    if (t >= 0 && instruction_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_next_button.tStart = t;  // (not accounting for frame time here)
      instruction_next_button.frameNStart = frameN;  // exact frame index
      
      instruction_next_button.setAutoDraw(true);
    }
    
    
    // if instruction_next_button is active this frame...
    if (instruction_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (instruction_next_button.status === PsychoJS.Status.STARTED) {
      // check whether instruction_next_button has been pressed
      if (isButtonClickedResponsive(instruction_next_button)) {
        if (!instruction_next_button.wasClicked) {
          // store time of first click
          instruction_next_button.timesOn.push(instruction_next_button.clock.getTime());
          // store time clicked until
          instruction_next_button.timesOff.push(instruction_next_button.clock.getTime());
        } else {
          // update time clicked until;
          instruction_next_button.timesOff[instruction_next_button.timesOff.length - 1] = instruction_next_button.clock.getTime();
        }
        if (!instruction_next_button.wasClicked) {
          // end routine when instruction_next_button is clicked
          continueRoutine = false;
          
        }
        // if instruction_next_button is still clicked next frame, it is not a new click
        instruction_next_button.wasClicked = true;
      } else {
        // if instruction_next_button is clicked next frame, it is a new click
        instruction_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if instruction_next_button hasn't started / has finished
      instruction_next_button.clock.reset();
      // if instruction_next_button is clicked next frame, it is a new click
      instruction_next_button.wasClicked = false;
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
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    psychoJS.experiment.addData('instruction_next_button.numClicks', instruction_next_button.numClicks);
    psychoJS.experiment.addData('instruction_next_button.timesOn', instruction_next_button.timesOn);
    psychoJS.experiment.addData('instruction_next_button.timesOff', instruction_next_button.timesOff);
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var role_instructionMaxDurationReached;
var role_instructionMaxDuration;
var role_instructionComponents;
function role_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'role_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    role_instructionClock.reset();
    routineTimer.reset();
    role_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset role_instruction_next_button to account for continued clicks & clear times on/off
    role_instruction_next_button.reset()
    psychoJS.experiment.addData('role_instruction.started', globalClock.getTime());
    role_instructionMaxDuration = None
    // keep track of which components have finished
    role_instructionComponents = [];
    role_instructionComponents.push(role_instruction_title);
    role_instructionComponents.push(role_paragraph_1);
    role_instructionComponents.push(role_paragraph_2);
    role_instructionComponents.push(role_paragraph_3);
    role_instructionComponents.push(role_paragraph_4);
    role_instructionComponents.push(role_paragraph_5);
    role_instructionComponents.push(role_instruction_next_button);
    
    for (const thisComponent of role_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function role_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'role_instruction' ---
    // get current time
    t = role_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *role_instruction_title* updates
    if (t >= 0.0 && role_instruction_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      role_instruction_title.tStart = t;  // (not accounting for frame time here)
      role_instruction_title.frameNStart = frameN;  // exact frame index
      
      role_instruction_title.setAutoDraw(true);
    }
    
    
    // if role_instruction_title is active this frame...
    if (role_instruction_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *role_paragraph_1* updates
    if (t >= 0.0 && role_paragraph_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      role_paragraph_1.tStart = t;  // (not accounting for frame time here)
      role_paragraph_1.frameNStart = frameN;  // exact frame index
      
      role_paragraph_1.setAutoDraw(true);
    }
    
    
    // if role_paragraph_1 is active this frame...
    if (role_paragraph_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *role_paragraph_2* updates
    if (t >= 0.0 && role_paragraph_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      role_paragraph_2.tStart = t;  // (not accounting for frame time here)
      role_paragraph_2.frameNStart = frameN;  // exact frame index
      
      role_paragraph_2.setAutoDraw(true);
    }
    
    
    // if role_paragraph_2 is active this frame...
    if (role_paragraph_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *role_paragraph_3* updates
    if (t >= 0.0 && role_paragraph_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      role_paragraph_3.tStart = t;  // (not accounting for frame time here)
      role_paragraph_3.frameNStart = frameN;  // exact frame index
      
      role_paragraph_3.setAutoDraw(true);
    }
    
    
    // if role_paragraph_3 is active this frame...
    if (role_paragraph_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *role_paragraph_4* updates
    if (t >= 0.0 && role_paragraph_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      role_paragraph_4.tStart = t;  // (not accounting for frame time here)
      role_paragraph_4.frameNStart = frameN;  // exact frame index
      
      role_paragraph_4.setAutoDraw(true);
    }
    
    
    // if role_paragraph_4 is active this frame...
    if (role_paragraph_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *role_paragraph_5* updates
    if (t >= 0.0 && role_paragraph_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      role_paragraph_5.tStart = t;  // (not accounting for frame time here)
      role_paragraph_5.frameNStart = frameN;  // exact frame index
      
      role_paragraph_5.setAutoDraw(true);
    }
    
    
    // if role_paragraph_5 is active this frame...
    if (role_paragraph_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *role_instruction_next_button* updates
    if (t >= 0 && role_instruction_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      role_instruction_next_button.tStart = t;  // (not accounting for frame time here)
      role_instruction_next_button.frameNStart = frameN;  // exact frame index
      
      role_instruction_next_button.setAutoDraw(true);
    }
    
    
    // if role_instruction_next_button is active this frame...
    if (role_instruction_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (role_instruction_next_button.status === PsychoJS.Status.STARTED) {
      // check whether role_instruction_next_button has been pressed
      if (isButtonClickedResponsive(role_instruction_next_button)) {
        if (!role_instruction_next_button.wasClicked) {
          // store time of first click
          role_instruction_next_button.timesOn.push(role_instruction_next_button.clock.getTime());
          // store time clicked until
          role_instruction_next_button.timesOff.push(role_instruction_next_button.clock.getTime());
        } else {
          // update time clicked until;
          role_instruction_next_button.timesOff[role_instruction_next_button.timesOff.length - 1] = role_instruction_next_button.clock.getTime();
        }
        if (!role_instruction_next_button.wasClicked) {
          // end routine when role_instruction_next_button is clicked
          continueRoutine = false;
          
        }
        // if role_instruction_next_button is still clicked next frame, it is not a new click
        role_instruction_next_button.wasClicked = true;
      } else {
        // if role_instruction_next_button is clicked next frame, it is a new click
        role_instruction_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if role_instruction_next_button hasn't started / has finished
      role_instruction_next_button.clock.reset();
      // if role_instruction_next_button is clicked next frame, it is a new click
      role_instruction_next_button.wasClicked = false;
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
    for (const thisComponent of role_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function role_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'role_instruction' ---
    for (const thisComponent of role_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('role_instruction.stopped', globalClock.getTime());
    psychoJS.experiment.addData('role_instruction_next_button.numClicks', role_instruction_next_button.numClicks);
    psychoJS.experiment.addData('role_instruction_next_button.timesOn', role_instruction_next_button.timesOn);
    psychoJS.experiment.addData('role_instruction_next_button.timesOff', role_instruction_next_button.timesOff);
    // the Routine "role_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var comprehension_checkMaxDurationReached;
var check_button_clicked;
var comprehension_checkMaxDuration;
var comprehension_checkComponents;
function comprehension_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'comprehension_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    comprehension_checkClock.reset();
    routineTimer.reset();
    comprehension_checkMaxDurationReached = false;
    // update component parameters for each repeat
    check_q1.reset()
    check_q2.reset()
    check_q3.reset()
    // Run 'Begin Routine' code from comprehension_init
    comprehension_error = "";
    check_button_clicked = false;
    // reset check_button to account for continued clicks & clear times on/off
    check_button.reset()
    psychoJS.experiment.addData('comprehension_check.started', globalClock.getTime());
    comprehension_checkMaxDuration = None
    // keep track of which components have finished
    comprehension_checkComponents = [];
    comprehension_checkComponents.push(comprehension_check_title);
    comprehension_checkComponents.push(check_q1_question);
    comprehension_checkComponents.push(check_q1);
    comprehension_checkComponents.push(check_q2_question);
    comprehension_checkComponents.push(check_q2);
    comprehension_checkComponents.push(check_q3_question);
    comprehension_checkComponents.push(check_q3);
    comprehension_checkComponents.push(comprehension_error_text);
    comprehension_checkComponents.push(comprehension_hint);
    comprehension_checkComponents.push(check_button);
    
    for (const thisComponent of comprehension_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function comprehension_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'comprehension_check' ---
    // get current time
    t = comprehension_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *comprehension_check_title* updates
    if (t >= 0.0 && comprehension_check_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comprehension_check_title.tStart = t;  // (not accounting for frame time here)
      comprehension_check_title.frameNStart = frameN;  // exact frame index
      
      comprehension_check_title.setAutoDraw(true);
    }
    
    
    // if comprehension_check_title is active this frame...
    if (comprehension_check_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *check_q1_question* updates
    if (t >= 0.0 && check_q1_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_q1_question.tStart = t;  // (not accounting for frame time here)
      check_q1_question.frameNStart = frameN;  // exact frame index
      
      check_q1_question.setAutoDraw(true);
    }
    
    
    // if check_q1_question is active this frame...
    if (check_q1_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *check_q1* updates
    if (t >= 0.0 && check_q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_q1.tStart = t;  // (not accounting for frame time here)
      check_q1.frameNStart = frameN;  // exact frame index
      
      check_q1.setAutoDraw(true);
    }
    
    
    // if check_q1 is active this frame...
    if (check_q1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *check_q2_question* updates
    if (t >= 0.0 && check_q2_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_q2_question.tStart = t;  // (not accounting for frame time here)
      check_q2_question.frameNStart = frameN;  // exact frame index
      
      check_q2_question.setAutoDraw(true);
    }
    
    
    // if check_q2_question is active this frame...
    if (check_q2_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *check_q2* updates
    if (t >= 0.0 && check_q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_q2.tStart = t;  // (not accounting for frame time here)
      check_q2.frameNStart = frameN;  // exact frame index
      
      check_q2.setAutoDraw(true);
    }
    
    
    // if check_q2 is active this frame...
    if (check_q2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *check_q3_question* updates
    if (t >= 0.0 && check_q3_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_q3_question.tStart = t;  // (not accounting for frame time here)
      check_q3_question.frameNStart = frameN;  // exact frame index
      
      check_q3_question.setAutoDraw(true);
    }
    
    
    // if check_q3_question is active this frame...
    if (check_q3_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *check_q3* updates
    if (t >= 0.0 && check_q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_q3.tStart = t;  // (not accounting for frame time here)
      check_q3.frameNStart = frameN;  // exact frame index
      
      check_q3.setAutoDraw(true);
    }
    
    
    // if check_q3 is active this frame...
    if (check_q3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *comprehension_error_text* updates
    if (t >= 0.0 && comprehension_error_text.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      comprehension_error_text.setText(comprehension_error, false);
      // keep track of start time/frame for later
      comprehension_error_text.tStart = t;  // (not accounting for frame time here)
      comprehension_error_text.frameNStart = frameN;  // exact frame index
      
      comprehension_error_text.setAutoDraw(true);
    }
    
    
    // if comprehension_error_text is active this frame...
    if (comprehension_error_text.status === PsychoJS.Status.STARTED) {
      // update params
      comprehension_error_text.setText(comprehension_error, false);
    }
    
    
    // *comprehension_hint* updates
    if (t >= 0.0 && comprehension_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      comprehension_hint.tStart = t;  // (not accounting for frame time here)
      comprehension_hint.frameNStart = frameN;  // exact frame index
      
      comprehension_hint.setAutoDraw(true);
    }
    
    
    // if comprehension_hint is active this frame...
    if (comprehension_hint.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from comprehension_init
    if (isButtonClickedResponsive(check_button)) {
        if ((check_q1.getRating() !== undefined) && (check_q2.getRating() !== undefined) && (check_q3.getRating() !== undefined)) {
            comprehension_attempts += 1;
            let _q1 = String(check_q1.getRating());
            let _q2 = String(check_q2.getRating());
            let _q3 = String(check_q3.getRating());
            let _q1_ok = ["個人投資家", "1", "0"].includes(_q1);
            let _q2_ok = ["表示されたESG項目名と報告値を確認し、その内容を理解する", "ESG項目名と報告値を確認・理解する", "2", "1"].includes(_q2);
            let _q3_ok = ["表示内容の理解、企業に対する評価および投資意向", "理解・企業評価・投資意向", "1", "0"].includes(_q3);
            if (_q1_ok && _q2_ok && _q3_ok) {
                comprehension_error = "";
                continueRoutine = false;
            } else {
                comprehension_error = "回答に誤りがあります。もう一度、実験説明と評価にあたっての説明を確認してから回答してください。";
            }
        } else {
            comprehension_error = "3問すべてに回答してください。";
        }
    }
    
    // *check_button* updates
    if (t >= 0 && check_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_button.tStart = t;  // (not accounting for frame time here)
      check_button.frameNStart = frameN;  // exact frame index
      
      check_button.setAutoDraw(true);
    }
    
    
    // if check_button is active this frame...
    if (check_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (check_button.status === PsychoJS.Status.STARTED) {
      // check whether check_button has been pressed
      if (isButtonClickedResponsive(check_button)) {
        if (!check_button.wasClicked) {
          // store time of first click
          check_button.timesOn.push(check_button.clock.getTime());
          // store time clicked until
          check_button.timesOff.push(check_button.clock.getTime());
        } else {
          // update time clicked until;
          check_button.timesOff[check_button.timesOff.length - 1] = check_button.clock.getTime();
        }
        if (!check_button.wasClicked) {
          
        }
        // if check_button is still clicked next frame, it is not a new click
        check_button.wasClicked = true;
      } else {
        // if check_button is clicked next frame, it is a new click
        check_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if check_button hasn't started / has finished
      check_button.clock.reset();
      // if check_button is clicked next frame, it is a new click
      check_button.wasClicked = false;
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
    for (const thisComponent of comprehension_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function comprehension_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'comprehension_check' ---
    for (const thisComponent of comprehension_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('comprehension_check.stopped', globalClock.getTime());
    psychoJS.experiment.addData('check_q1.response', check_q1.getRating());
    psychoJS.experiment.addData('check_q1.rt', check_q1.getRT());
    psychoJS.experiment.addData('check_q2.response', check_q2.getRating());
    psychoJS.experiment.addData('check_q2.rt', check_q2.getRT());
    psychoJS.experiment.addData('check_q3.response', check_q3.getRating());
    psychoJS.experiment.addData('check_q3.rt', check_q3.getRT());
    // Run 'End Routine' code from comprehension_init
    psychoJS.experiment.addData("comprehension_attempts", comprehension_attempts);
    psychoJS.experiment.addData('check_button.numClicks', check_button.numClicks);
    psychoJS.experiment.addData('check_button.timesOn', check_button.timesOn);
    psychoJS.experiment.addData('check_button.timesOff', check_button.timesOff);
    // the Routine "comprehension_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimulus_guidanceMaxDurationReached;
var stimulus_guidanceMaxDuration;
var stimulus_guidanceComponents;
function stimulus_guidanceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimulus_guidance' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stimulus_guidanceClock.reset();
    routineTimer.reset();
    stimulus_guidanceMaxDurationReached = false;
    // update component parameters for each repeat
    // reset stimulus_guidance_next_button to account for continued clicks & clear times on/off
    stimulus_guidance_next_button.reset()
    psychoJS.experiment.addData('stimulus_guidance.started', globalClock.getTime());
    stimulus_guidanceMaxDuration = None
    // keep track of which components have finished
    stimulus_guidanceComponents = [];
    stimulus_guidanceComponents.push(stimulus_guidance_title);
    stimulus_guidanceComponents.push(stimulus_guidance_body);
    stimulus_guidanceComponents.push(stimulus_guidance_next_button);
    
    for (const thisComponent of stimulus_guidanceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimulus_guidanceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimulus_guidance' ---
    // get current time
    t = stimulus_guidanceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimulus_guidance_title* updates
    if (t >= 0.0 && stimulus_guidance_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_guidance_title.tStart = t;  // (not accounting for frame time here)
      stimulus_guidance_title.frameNStart = frameN;  // exact frame index
      
      stimulus_guidance_title.setAutoDraw(true);
    }
    
    
    // if stimulus_guidance_title is active this frame...
    if (stimulus_guidance_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stimulus_guidance_body* updates
    if (t >= 0.0 && stimulus_guidance_body.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_guidance_body.tStart = t;  // (not accounting for frame time here)
      stimulus_guidance_body.frameNStart = frameN;  // exact frame index
      
      stimulus_guidance_body.setAutoDraw(true);
    }
    
    
    // if stimulus_guidance_body is active this frame...
    if (stimulus_guidance_body.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stimulus_guidance_next_button* updates
    if (t >= 0 && stimulus_guidance_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_guidance_next_button.tStart = t;  // (not accounting for frame time here)
      stimulus_guidance_next_button.frameNStart = frameN;  // exact frame index
      
      stimulus_guidance_next_button.setAutoDraw(true);
    }
    
    
    // if stimulus_guidance_next_button is active this frame...
    if (stimulus_guidance_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (stimulus_guidance_next_button.status === PsychoJS.Status.STARTED) {
      // check whether stimulus_guidance_next_button has been pressed
      if (isButtonClickedResponsive(stimulus_guidance_next_button)) {
        if (!stimulus_guidance_next_button.wasClicked) {
          // store time of first click
          stimulus_guidance_next_button.timesOn.push(stimulus_guidance_next_button.clock.getTime());
          // store time clicked until
          stimulus_guidance_next_button.timesOff.push(stimulus_guidance_next_button.clock.getTime());
        } else {
          // update time clicked until;
          stimulus_guidance_next_button.timesOff[stimulus_guidance_next_button.timesOff.length - 1] = stimulus_guidance_next_button.clock.getTime();
        }
        if (!stimulus_guidance_next_button.wasClicked) {
          // end routine when stimulus_guidance_next_button is clicked
          continueRoutine = false;
          
        }
        // if stimulus_guidance_next_button is still clicked next frame, it is not a new click
        stimulus_guidance_next_button.wasClicked = true;
      } else {
        // if stimulus_guidance_next_button is clicked next frame, it is a new click
        stimulus_guidance_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if stimulus_guidance_next_button hasn't started / has finished
      stimulus_guidance_next_button.clock.reset();
      // if stimulus_guidance_next_button is clicked next frame, it is a new click
      stimulus_guidance_next_button.wasClicked = false;
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
    for (const thisComponent of stimulus_guidanceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulus_guidanceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimulus_guidance' ---
    for (const thisComponent of stimulus_guidanceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimulus_guidance.stopped', globalClock.getTime());
    psychoJS.experiment.addData('stimulus_guidance_next_button.numClicks', stimulus_guidance_next_button.numClicks);
    psychoJS.experiment.addData('stimulus_guidance_next_button.timesOn', stimulus_guidance_next_button.timesOn);
    psychoJS.experiment.addData('stimulus_guidance_next_button.timesOff', stimulus_guidance_next_button.timesOff);
    // the Routine "stimulus_guidance" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixationMaxDurationReached;
var fixationMaxDuration;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fixationClock.reset();
    routineTimer.reset();
    fixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation.started', globalClock.getTime());
    fixationMaxDuration = 1.0
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation_cross);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation' ---
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > fixationMaxDuration) {
        fixationMaxDurationReached = true
        continueRoutine = false
    }
    
    // *fixation_cross* updates
    if (t >= 0.0 && fixation_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross.tStart = t;  // (not accounting for frame time here)
      fixation_cross.frameNStart = frameN;  // exact frame index
      
      fixation_cross.setAutoDraw(true);
    }
    
    
    // if fixation_cross is active this frame...
    if (fixation_cross.status === PsychoJS.Status.STARTED) {
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
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation' ---
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation.stopped', globalClock.getTime());
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimulus_tableMaxDurationReached;
var stimulus_clock;
var stimulus_tableMaxDuration;
var stimulus_tableComponents;
function stimulus_tableRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimulus_table' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stimulus_tableClock.reset();
    routineTimer.reset();
    stimulus_tableMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from stimulus_timing
    stimulus_clock = new util.Clock();
    stimulus_clock.reset();
    // Run 'Begin Routine' code from label_text_setup
    label_01.setText(current_labels[0]);
    label_02.setText(current_labels[1]);
    label_03.setText(current_labels[2]);
    label_04.setText(current_labels[3]);
    label_05.setText(current_labels[4]);
    label_06.setText(current_labels[5]);
    label_07.setText(current_labels[6]);
    label_08.setText(current_labels[7]);
    label_09.setText(current_labels[8]);
    label_10.setText(current_labels[9]);
    label_11.setText(current_labels[10]);
    label_12.setText(current_labels[11]);
    label_13.setText(current_labels[12]);
    // reset stimulus_table_next_button to account for continued clicks & clear times on/off
    stimulus_table_next_button.reset()
    psychoJS.experiment.addData('stimulus_table.started', globalClock.getTime());
    stimulus_tableMaxDuration = None
    // keep track of which components have finished
    stimulus_tableComponents = [];
    stimulus_tableComponents.push(table_title);
    stimulus_tableComponents.push(table_outer);
    stimulus_tableComponents.push(table_header);
    stimulus_tableComponents.push(table_vline_1);
    stimulus_tableComponents.push(table_vline_2);
    stimulus_tableComponents.push(table_vline_3);
    stimulus_tableComponents.push(table_vline_4);
    stimulus_tableComponents.push(table_vline_5);
    stimulus_tableComponents.push(table_hline_01);
    stimulus_tableComponents.push(table_hline_02);
    stimulus_tableComponents.push(table_hline_03);
    stimulus_tableComponents.push(table_hline_04);
    stimulus_tableComponents.push(table_hline_05);
    stimulus_tableComponents.push(table_hline_06);
    stimulus_tableComponents.push(table_hline_07);
    stimulus_tableComponents.push(table_hline_08);
    stimulus_tableComponents.push(table_hline_09);
    stimulus_tableComponents.push(table_hline_10);
    stimulus_tableComponents.push(table_hline_11);
    stimulus_tableComponents.push(table_hline_12);
    stimulus_tableComponents.push(table_hline_13);
    stimulus_tableComponents.push(header_Nono);
    stimulus_tableComponents.push(header_GRI);
    stimulus_tableComponents.push(header_開示項目名);
    stimulus_tableComponents.push(header_2024year);
    stimulus_tableComponents.push(header_2025year);
    stimulus_tableComponents.push(header_変化);
    stimulus_tableComponents.push(row_fill_01);
    stimulus_tableComponents.push(no_01);
    stimulus_tableComponents.push(gri_01);
    stimulus_tableComponents.push(label_01);
    stimulus_tableComponents.push(value_2024_01);
    stimulus_tableComponents.push(value_2025_01);
    stimulus_tableComponents.push(change_01);
    stimulus_tableComponents.push(no_02);
    stimulus_tableComponents.push(gri_02);
    stimulus_tableComponents.push(label_02);
    stimulus_tableComponents.push(value_2024_02);
    stimulus_tableComponents.push(value_2025_02);
    stimulus_tableComponents.push(change_02);
    stimulus_tableComponents.push(row_fill_03);
    stimulus_tableComponents.push(no_03);
    stimulus_tableComponents.push(gri_03);
    stimulus_tableComponents.push(label_03);
    stimulus_tableComponents.push(value_2024_03);
    stimulus_tableComponents.push(value_2025_03);
    stimulus_tableComponents.push(change_03);
    stimulus_tableComponents.push(no_04);
    stimulus_tableComponents.push(gri_04);
    stimulus_tableComponents.push(label_04);
    stimulus_tableComponents.push(value_2024_04);
    stimulus_tableComponents.push(value_2025_04);
    stimulus_tableComponents.push(change_04);
    stimulus_tableComponents.push(row_fill_05);
    stimulus_tableComponents.push(no_05);
    stimulus_tableComponents.push(gri_05);
    stimulus_tableComponents.push(label_05);
    stimulus_tableComponents.push(value_2024_05);
    stimulus_tableComponents.push(value_2025_05);
    stimulus_tableComponents.push(change_05);
    stimulus_tableComponents.push(no_06);
    stimulus_tableComponents.push(gri_06);
    stimulus_tableComponents.push(label_06);
    stimulus_tableComponents.push(value_2024_06);
    stimulus_tableComponents.push(value_2025_06);
    stimulus_tableComponents.push(change_06);
    stimulus_tableComponents.push(row_fill_07);
    stimulus_tableComponents.push(no_07);
    stimulus_tableComponents.push(gri_07);
    stimulus_tableComponents.push(label_07);
    stimulus_tableComponents.push(value_2024_07);
    stimulus_tableComponents.push(value_2025_07);
    stimulus_tableComponents.push(change_07);
    stimulus_tableComponents.push(no_08);
    stimulus_tableComponents.push(gri_08);
    stimulus_tableComponents.push(label_08);
    stimulus_tableComponents.push(value_2024_08);
    stimulus_tableComponents.push(value_2025_08);
    stimulus_tableComponents.push(change_08);
    stimulus_tableComponents.push(row_fill_09);
    stimulus_tableComponents.push(no_09);
    stimulus_tableComponents.push(gri_09);
    stimulus_tableComponents.push(label_09);
    stimulus_tableComponents.push(value_2024_09);
    stimulus_tableComponents.push(value_2025_09);
    stimulus_tableComponents.push(change_09);
    stimulus_tableComponents.push(no_10);
    stimulus_tableComponents.push(gri_10);
    stimulus_tableComponents.push(label_10);
    stimulus_tableComponents.push(value_2024_10);
    stimulus_tableComponents.push(value_2025_10);
    stimulus_tableComponents.push(change_10);
    stimulus_tableComponents.push(row_fill_11);
    stimulus_tableComponents.push(no_11);
    stimulus_tableComponents.push(gri_11);
    stimulus_tableComponents.push(label_11);
    stimulus_tableComponents.push(value_2024_11);
    stimulus_tableComponents.push(value_2025_11);
    stimulus_tableComponents.push(change_11);
    stimulus_tableComponents.push(no_12);
    stimulus_tableComponents.push(gri_12);
    stimulus_tableComponents.push(label_12);
    stimulus_tableComponents.push(value_2024_12);
    stimulus_tableComponents.push(value_2025_12);
    stimulus_tableComponents.push(change_12);
    stimulus_tableComponents.push(row_fill_13);
    stimulus_tableComponents.push(no_13);
    stimulus_tableComponents.push(gri_13);
    stimulus_tableComponents.push(label_13);
    stimulus_tableComponents.push(value_2024_13);
    stimulus_tableComponents.push(value_2025_13);
    stimulus_tableComponents.push(change_13);
    stimulus_tableComponents.push(stimulus_table_next_button);
    
    for (const thisComponent of stimulus_tableComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimulus_tableRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimulus_table' ---
    // get current time
    t = stimulus_tableClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *table_title* updates
    if (t >= 0.0 && table_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_title.tStart = t;  // (not accounting for frame time here)
      table_title.frameNStart = frameN;  // exact frame index
      
      table_title.setAutoDraw(true);
    }
    
    
    // if table_title is active this frame...
    if (table_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_outer* updates
    if (t >= 0.0 && table_outer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_outer.tStart = t;  // (not accounting for frame time here)
      table_outer.frameNStart = frameN;  // exact frame index
      
      table_outer.setAutoDraw(true);
    }
    
    
    // if table_outer is active this frame...
    if (table_outer.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_header* updates
    if (t >= 0.0 && table_header.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_header.tStart = t;  // (not accounting for frame time here)
      table_header.frameNStart = frameN;  // exact frame index
      
      table_header.setAutoDraw(true);
    }
    
    
    // if table_header is active this frame...
    if (table_header.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_vline_1* updates
    if (t >= 0.0 && table_vline_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_vline_1.tStart = t;  // (not accounting for frame time here)
      table_vline_1.frameNStart = frameN;  // exact frame index
      
      table_vline_1.setAutoDraw(true);
    }
    
    
    // if table_vline_1 is active this frame...
    if (table_vline_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_vline_2* updates
    if (t >= 0.0 && table_vline_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_vline_2.tStart = t;  // (not accounting for frame time here)
      table_vline_2.frameNStart = frameN;  // exact frame index
      
      table_vline_2.setAutoDraw(true);
    }
    
    
    // if table_vline_2 is active this frame...
    if (table_vline_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_vline_3* updates
    if (t >= 0.0 && table_vline_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_vline_3.tStart = t;  // (not accounting for frame time here)
      table_vline_3.frameNStart = frameN;  // exact frame index
      
      table_vline_3.setAutoDraw(true);
    }
    
    
    // if table_vline_3 is active this frame...
    if (table_vline_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_vline_4* updates
    if (t >= 0.0 && table_vline_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_vline_4.tStart = t;  // (not accounting for frame time here)
      table_vline_4.frameNStart = frameN;  // exact frame index
      
      table_vline_4.setAutoDraw(true);
    }
    
    
    // if table_vline_4 is active this frame...
    if (table_vline_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_vline_5* updates
    if (t >= 0.0 && table_vline_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_vline_5.tStart = t;  // (not accounting for frame time here)
      table_vline_5.frameNStart = frameN;  // exact frame index
      
      table_vline_5.setAutoDraw(true);
    }
    
    
    // if table_vline_5 is active this frame...
    if (table_vline_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_01* updates
    if (t >= 0.0 && table_hline_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_01.tStart = t;  // (not accounting for frame time here)
      table_hline_01.frameNStart = frameN;  // exact frame index
      
      table_hline_01.setAutoDraw(true);
    }
    
    
    // if table_hline_01 is active this frame...
    if (table_hline_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_02* updates
    if (t >= 0.0 && table_hline_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_02.tStart = t;  // (not accounting for frame time here)
      table_hline_02.frameNStart = frameN;  // exact frame index
      
      table_hline_02.setAutoDraw(true);
    }
    
    
    // if table_hline_02 is active this frame...
    if (table_hline_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_03* updates
    if (t >= 0.0 && table_hline_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_03.tStart = t;  // (not accounting for frame time here)
      table_hline_03.frameNStart = frameN;  // exact frame index
      
      table_hline_03.setAutoDraw(true);
    }
    
    
    // if table_hline_03 is active this frame...
    if (table_hline_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_04* updates
    if (t >= 0.0 && table_hline_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_04.tStart = t;  // (not accounting for frame time here)
      table_hline_04.frameNStart = frameN;  // exact frame index
      
      table_hline_04.setAutoDraw(true);
    }
    
    
    // if table_hline_04 is active this frame...
    if (table_hline_04.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_05* updates
    if (t >= 0.0 && table_hline_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_05.tStart = t;  // (not accounting for frame time here)
      table_hline_05.frameNStart = frameN;  // exact frame index
      
      table_hline_05.setAutoDraw(true);
    }
    
    
    // if table_hline_05 is active this frame...
    if (table_hline_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_06* updates
    if (t >= 0.0 && table_hline_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_06.tStart = t;  // (not accounting for frame time here)
      table_hline_06.frameNStart = frameN;  // exact frame index
      
      table_hline_06.setAutoDraw(true);
    }
    
    
    // if table_hline_06 is active this frame...
    if (table_hline_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_07* updates
    if (t >= 0.0 && table_hline_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_07.tStart = t;  // (not accounting for frame time here)
      table_hline_07.frameNStart = frameN;  // exact frame index
      
      table_hline_07.setAutoDraw(true);
    }
    
    
    // if table_hline_07 is active this frame...
    if (table_hline_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_08* updates
    if (t >= 0.0 && table_hline_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_08.tStart = t;  // (not accounting for frame time here)
      table_hline_08.frameNStart = frameN;  // exact frame index
      
      table_hline_08.setAutoDraw(true);
    }
    
    
    // if table_hline_08 is active this frame...
    if (table_hline_08.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_09* updates
    if (t >= 0.0 && table_hline_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_09.tStart = t;  // (not accounting for frame time here)
      table_hline_09.frameNStart = frameN;  // exact frame index
      
      table_hline_09.setAutoDraw(true);
    }
    
    
    // if table_hline_09 is active this frame...
    if (table_hline_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_10* updates
    if (t >= 0.0 && table_hline_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_10.tStart = t;  // (not accounting for frame time here)
      table_hline_10.frameNStart = frameN;  // exact frame index
      
      table_hline_10.setAutoDraw(true);
    }
    
    
    // if table_hline_10 is active this frame...
    if (table_hline_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_11* updates
    if (t >= 0.0 && table_hline_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_11.tStart = t;  // (not accounting for frame time here)
      table_hline_11.frameNStart = frameN;  // exact frame index
      
      table_hline_11.setAutoDraw(true);
    }
    
    
    // if table_hline_11 is active this frame...
    if (table_hline_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_12* updates
    if (t >= 0.0 && table_hline_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_12.tStart = t;  // (not accounting for frame time here)
      table_hline_12.frameNStart = frameN;  // exact frame index
      
      table_hline_12.setAutoDraw(true);
    }
    
    
    // if table_hline_12 is active this frame...
    if (table_hline_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *table_hline_13* updates
    if (t >= 0.0 && table_hline_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      table_hline_13.tStart = t;  // (not accounting for frame time here)
      table_hline_13.frameNStart = frameN;  // exact frame index
      
      table_hline_13.setAutoDraw(true);
    }
    
    
    // if table_hline_13 is active this frame...
    if (table_hline_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *header_Nono* updates
    if (t >= 0.0 && header_Nono.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_Nono.tStart = t;  // (not accounting for frame time here)
      header_Nono.frameNStart = frameN;  // exact frame index
      
      header_Nono.setAutoDraw(true);
    }
    
    
    // if header_Nono is active this frame...
    if (header_Nono.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *header_GRI* updates
    if (t >= 0.0 && header_GRI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_GRI.tStart = t;  // (not accounting for frame time here)
      header_GRI.frameNStart = frameN;  // exact frame index
      
      header_GRI.setAutoDraw(true);
    }
    
    
    // if header_GRI is active this frame...
    if (header_GRI.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *header_開示項目名* updates
    if (t >= 0.0 && header_開示項目名.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_開示項目名.tStart = t;  // (not accounting for frame time here)
      header_開示項目名.frameNStart = frameN;  // exact frame index
      
      header_開示項目名.setAutoDraw(true);
    }
    
    
    // if header_開示項目名 is active this frame...
    if (header_開示項目名.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *header_2024year* updates
    if (t >= 0.0 && header_2024year.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_2024year.tStart = t;  // (not accounting for frame time here)
      header_2024year.frameNStart = frameN;  // exact frame index
      
      header_2024year.setAutoDraw(true);
    }
    
    
    // if header_2024year is active this frame...
    if (header_2024year.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *header_2025year* updates
    if (t >= 0.0 && header_2025year.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_2025year.tStart = t;  // (not accounting for frame time here)
      header_2025year.frameNStart = frameN;  // exact frame index
      
      header_2025year.setAutoDraw(true);
    }
    
    
    // if header_2025year is active this frame...
    if (header_2025year.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *header_変化* updates
    if (t >= 0.0 && header_変化.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      header_変化.tStart = t;  // (not accounting for frame time here)
      header_変化.frameNStart = frameN;  // exact frame index
      
      header_変化.setAutoDraw(true);
    }
    
    
    // if header_変化 is active this frame...
    if (header_変化.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_fill_01* updates
    if (t >= 0.0 && row_fill_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_fill_01.tStart = t;  // (not accounting for frame time here)
      row_fill_01.frameNStart = frameN;  // exact frame index
      
      row_fill_01.setAutoDraw(true);
    }
    
    
    // if row_fill_01 is active this frame...
    if (row_fill_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_01* updates
    if (t >= 0.0 && no_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_01.tStart = t;  // (not accounting for frame time here)
      no_01.frameNStart = frameN;  // exact frame index
      
      no_01.setAutoDraw(true);
    }
    
    
    // if no_01 is active this frame...
    if (no_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_01* updates
    if (t >= 0.0 && gri_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_01.tStart = t;  // (not accounting for frame time here)
      gri_01.frameNStart = frameN;  // exact frame index
      
      gri_01.setAutoDraw(true);
    }
    
    
    // if gri_01 is active this frame...
    if (gri_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_01* updates
    if (t >= 0.0 && label_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_01.tStart = t;  // (not accounting for frame time here)
      label_01.frameNStart = frameN;  // exact frame index
      
      label_01.setAutoDraw(true);
    }
    
    
    // if label_01 is active this frame...
    if (label_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_01* updates
    if (t >= 0.0 && value_2024_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_01.tStart = t;  // (not accounting for frame time here)
      value_2024_01.frameNStart = frameN;  // exact frame index
      
      value_2024_01.setAutoDraw(true);
    }
    
    
    // if value_2024_01 is active this frame...
    if (value_2024_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_01* updates
    if (t >= 0.0 && value_2025_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_01.tStart = t;  // (not accounting for frame time here)
      value_2025_01.frameNStart = frameN;  // exact frame index
      
      value_2025_01.setAutoDraw(true);
    }
    
    
    // if value_2025_01 is active this frame...
    if (value_2025_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_01* updates
    if (t >= 0.0 && change_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_01.tStart = t;  // (not accounting for frame time here)
      change_01.frameNStart = frameN;  // exact frame index
      
      change_01.setAutoDraw(true);
    }
    
    
    // if change_01 is active this frame...
    if (change_01.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_02* updates
    if (t >= 0.0 && no_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_02.tStart = t;  // (not accounting for frame time here)
      no_02.frameNStart = frameN;  // exact frame index
      
      no_02.setAutoDraw(true);
    }
    
    
    // if no_02 is active this frame...
    if (no_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_02* updates
    if (t >= 0.0 && gri_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_02.tStart = t;  // (not accounting for frame time here)
      gri_02.frameNStart = frameN;  // exact frame index
      
      gri_02.setAutoDraw(true);
    }
    
    
    // if gri_02 is active this frame...
    if (gri_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_02* updates
    if (t >= 0.0 && label_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_02.tStart = t;  // (not accounting for frame time here)
      label_02.frameNStart = frameN;  // exact frame index
      
      label_02.setAutoDraw(true);
    }
    
    
    // if label_02 is active this frame...
    if (label_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_02* updates
    if (t >= 0.0 && value_2024_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_02.tStart = t;  // (not accounting for frame time here)
      value_2024_02.frameNStart = frameN;  // exact frame index
      
      value_2024_02.setAutoDraw(true);
    }
    
    
    // if value_2024_02 is active this frame...
    if (value_2024_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_02* updates
    if (t >= 0.0 && value_2025_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_02.tStart = t;  // (not accounting for frame time here)
      value_2025_02.frameNStart = frameN;  // exact frame index
      
      value_2025_02.setAutoDraw(true);
    }
    
    
    // if value_2025_02 is active this frame...
    if (value_2025_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_02* updates
    if (t >= 0.0 && change_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_02.tStart = t;  // (not accounting for frame time here)
      change_02.frameNStart = frameN;  // exact frame index
      
      change_02.setAutoDraw(true);
    }
    
    
    // if change_02 is active this frame...
    if (change_02.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_fill_03* updates
    if (t >= 0.0 && row_fill_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_fill_03.tStart = t;  // (not accounting for frame time here)
      row_fill_03.frameNStart = frameN;  // exact frame index
      
      row_fill_03.setAutoDraw(true);
    }
    
    
    // if row_fill_03 is active this frame...
    if (row_fill_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_03* updates
    if (t >= 0.0 && no_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_03.tStart = t;  // (not accounting for frame time here)
      no_03.frameNStart = frameN;  // exact frame index
      
      no_03.setAutoDraw(true);
    }
    
    
    // if no_03 is active this frame...
    if (no_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_03* updates
    if (t >= 0.0 && gri_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_03.tStart = t;  // (not accounting for frame time here)
      gri_03.frameNStart = frameN;  // exact frame index
      
      gri_03.setAutoDraw(true);
    }
    
    
    // if gri_03 is active this frame...
    if (gri_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_03* updates
    if (t >= 0.0 && label_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_03.tStart = t;  // (not accounting for frame time here)
      label_03.frameNStart = frameN;  // exact frame index
      
      label_03.setAutoDraw(true);
    }
    
    
    // if label_03 is active this frame...
    if (label_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_03* updates
    if (t >= 0.0 && value_2024_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_03.tStart = t;  // (not accounting for frame time here)
      value_2024_03.frameNStart = frameN;  // exact frame index
      
      value_2024_03.setAutoDraw(true);
    }
    
    
    // if value_2024_03 is active this frame...
    if (value_2024_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_03* updates
    if (t >= 0.0 && value_2025_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_03.tStart = t;  // (not accounting for frame time here)
      value_2025_03.frameNStart = frameN;  // exact frame index
      
      value_2025_03.setAutoDraw(true);
    }
    
    
    // if value_2025_03 is active this frame...
    if (value_2025_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_03* updates
    if (t >= 0.0 && change_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_03.tStart = t;  // (not accounting for frame time here)
      change_03.frameNStart = frameN;  // exact frame index
      
      change_03.setAutoDraw(true);
    }
    
    
    // if change_03 is active this frame...
    if (change_03.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_04* updates
    if (t >= 0.0 && no_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_04.tStart = t;  // (not accounting for frame time here)
      no_04.frameNStart = frameN;  // exact frame index
      
      no_04.setAutoDraw(true);
    }
    
    
    // if no_04 is active this frame...
    if (no_04.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_04* updates
    if (t >= 0.0 && gri_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_04.tStart = t;  // (not accounting for frame time here)
      gri_04.frameNStart = frameN;  // exact frame index
      
      gri_04.setAutoDraw(true);
    }
    
    
    // if gri_04 is active this frame...
    if (gri_04.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_04* updates
    if (t >= 0.0 && label_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_04.tStart = t;  // (not accounting for frame time here)
      label_04.frameNStart = frameN;  // exact frame index
      
      label_04.setAutoDraw(true);
    }
    
    
    // if label_04 is active this frame...
    if (label_04.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_04* updates
    if (t >= 0.0 && value_2024_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_04.tStart = t;  // (not accounting for frame time here)
      value_2024_04.frameNStart = frameN;  // exact frame index
      
      value_2024_04.setAutoDraw(true);
    }
    
    
    // if value_2024_04 is active this frame...
    if (value_2024_04.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_04* updates
    if (t >= 0.0 && value_2025_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_04.tStart = t;  // (not accounting for frame time here)
      value_2025_04.frameNStart = frameN;  // exact frame index
      
      value_2025_04.setAutoDraw(true);
    }
    
    
    // if value_2025_04 is active this frame...
    if (value_2025_04.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_04* updates
    if (t >= 0.0 && change_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_04.tStart = t;  // (not accounting for frame time here)
      change_04.frameNStart = frameN;  // exact frame index
      
      change_04.setAutoDraw(true);
    }
    
    
    // if change_04 is active this frame...
    if (change_04.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_fill_05* updates
    if (t >= 0.0 && row_fill_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_fill_05.tStart = t;  // (not accounting for frame time here)
      row_fill_05.frameNStart = frameN;  // exact frame index
      
      row_fill_05.setAutoDraw(true);
    }
    
    
    // if row_fill_05 is active this frame...
    if (row_fill_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_05* updates
    if (t >= 0.0 && no_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_05.tStart = t;  // (not accounting for frame time here)
      no_05.frameNStart = frameN;  // exact frame index
      
      no_05.setAutoDraw(true);
    }
    
    
    // if no_05 is active this frame...
    if (no_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_05* updates
    if (t >= 0.0 && gri_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_05.tStart = t;  // (not accounting for frame time here)
      gri_05.frameNStart = frameN;  // exact frame index
      
      gri_05.setAutoDraw(true);
    }
    
    
    // if gri_05 is active this frame...
    if (gri_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_05* updates
    if (t >= 0.0 && label_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_05.tStart = t;  // (not accounting for frame time here)
      label_05.frameNStart = frameN;  // exact frame index
      
      label_05.setAutoDraw(true);
    }
    
    
    // if label_05 is active this frame...
    if (label_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_05* updates
    if (t >= 0.0 && value_2024_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_05.tStart = t;  // (not accounting for frame time here)
      value_2024_05.frameNStart = frameN;  // exact frame index
      
      value_2024_05.setAutoDraw(true);
    }
    
    
    // if value_2024_05 is active this frame...
    if (value_2024_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_05* updates
    if (t >= 0.0 && value_2025_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_05.tStart = t;  // (not accounting for frame time here)
      value_2025_05.frameNStart = frameN;  // exact frame index
      
      value_2025_05.setAutoDraw(true);
    }
    
    
    // if value_2025_05 is active this frame...
    if (value_2025_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_05* updates
    if (t >= 0.0 && change_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_05.tStart = t;  // (not accounting for frame time here)
      change_05.frameNStart = frameN;  // exact frame index
      
      change_05.setAutoDraw(true);
    }
    
    
    // if change_05 is active this frame...
    if (change_05.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_06* updates
    if (t >= 0.0 && no_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_06.tStart = t;  // (not accounting for frame time here)
      no_06.frameNStart = frameN;  // exact frame index
      
      no_06.setAutoDraw(true);
    }
    
    
    // if no_06 is active this frame...
    if (no_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_06* updates
    if (t >= 0.0 && gri_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_06.tStart = t;  // (not accounting for frame time here)
      gri_06.frameNStart = frameN;  // exact frame index
      
      gri_06.setAutoDraw(true);
    }
    
    
    // if gri_06 is active this frame...
    if (gri_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_06* updates
    if (t >= 0.0 && label_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_06.tStart = t;  // (not accounting for frame time here)
      label_06.frameNStart = frameN;  // exact frame index
      
      label_06.setAutoDraw(true);
    }
    
    
    // if label_06 is active this frame...
    if (label_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_06* updates
    if (t >= 0.0 && value_2024_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_06.tStart = t;  // (not accounting for frame time here)
      value_2024_06.frameNStart = frameN;  // exact frame index
      
      value_2024_06.setAutoDraw(true);
    }
    
    
    // if value_2024_06 is active this frame...
    if (value_2024_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_06* updates
    if (t >= 0.0 && value_2025_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_06.tStart = t;  // (not accounting for frame time here)
      value_2025_06.frameNStart = frameN;  // exact frame index
      
      value_2025_06.setAutoDraw(true);
    }
    
    
    // if value_2025_06 is active this frame...
    if (value_2025_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_06* updates
    if (t >= 0.0 && change_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_06.tStart = t;  // (not accounting for frame time here)
      change_06.frameNStart = frameN;  // exact frame index
      
      change_06.setAutoDraw(true);
    }
    
    
    // if change_06 is active this frame...
    if (change_06.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_fill_07* updates
    if (t >= 0.0 && row_fill_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_fill_07.tStart = t;  // (not accounting for frame time here)
      row_fill_07.frameNStart = frameN;  // exact frame index
      
      row_fill_07.setAutoDraw(true);
    }
    
    
    // if row_fill_07 is active this frame...
    if (row_fill_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_07* updates
    if (t >= 0.0 && no_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_07.tStart = t;  // (not accounting for frame time here)
      no_07.frameNStart = frameN;  // exact frame index
      
      no_07.setAutoDraw(true);
    }
    
    
    // if no_07 is active this frame...
    if (no_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_07* updates
    if (t >= 0.0 && gri_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_07.tStart = t;  // (not accounting for frame time here)
      gri_07.frameNStart = frameN;  // exact frame index
      
      gri_07.setAutoDraw(true);
    }
    
    
    // if gri_07 is active this frame...
    if (gri_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_07* updates
    if (t >= 0.0 && label_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_07.tStart = t;  // (not accounting for frame time here)
      label_07.frameNStart = frameN;  // exact frame index
      
      label_07.setAutoDraw(true);
    }
    
    
    // if label_07 is active this frame...
    if (label_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_07* updates
    if (t >= 0.0 && value_2024_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_07.tStart = t;  // (not accounting for frame time here)
      value_2024_07.frameNStart = frameN;  // exact frame index
      
      value_2024_07.setAutoDraw(true);
    }
    
    
    // if value_2024_07 is active this frame...
    if (value_2024_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_07* updates
    if (t >= 0.0 && value_2025_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_07.tStart = t;  // (not accounting for frame time here)
      value_2025_07.frameNStart = frameN;  // exact frame index
      
      value_2025_07.setAutoDraw(true);
    }
    
    
    // if value_2025_07 is active this frame...
    if (value_2025_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_07* updates
    if (t >= 0.0 && change_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_07.tStart = t;  // (not accounting for frame time here)
      change_07.frameNStart = frameN;  // exact frame index
      
      change_07.setAutoDraw(true);
    }
    
    
    // if change_07 is active this frame...
    if (change_07.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_08* updates
    if (t >= 0.0 && no_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_08.tStart = t;  // (not accounting for frame time here)
      no_08.frameNStart = frameN;  // exact frame index
      
      no_08.setAutoDraw(true);
    }
    
    
    // if no_08 is active this frame...
    if (no_08.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_08* updates
    if (t >= 0.0 && gri_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_08.tStart = t;  // (not accounting for frame time here)
      gri_08.frameNStart = frameN;  // exact frame index
      
      gri_08.setAutoDraw(true);
    }
    
    
    // if gri_08 is active this frame...
    if (gri_08.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_08* updates
    if (t >= 0.0 && label_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_08.tStart = t;  // (not accounting for frame time here)
      label_08.frameNStart = frameN;  // exact frame index
      
      label_08.setAutoDraw(true);
    }
    
    
    // if label_08 is active this frame...
    if (label_08.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_08* updates
    if (t >= 0.0 && value_2024_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_08.tStart = t;  // (not accounting for frame time here)
      value_2024_08.frameNStart = frameN;  // exact frame index
      
      value_2024_08.setAutoDraw(true);
    }
    
    
    // if value_2024_08 is active this frame...
    if (value_2024_08.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_08* updates
    if (t >= 0.0 && value_2025_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_08.tStart = t;  // (not accounting for frame time here)
      value_2025_08.frameNStart = frameN;  // exact frame index
      
      value_2025_08.setAutoDraw(true);
    }
    
    
    // if value_2025_08 is active this frame...
    if (value_2025_08.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_08* updates
    if (t >= 0.0 && change_08.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_08.tStart = t;  // (not accounting for frame time here)
      change_08.frameNStart = frameN;  // exact frame index
      
      change_08.setAutoDraw(true);
    }
    
    
    // if change_08 is active this frame...
    if (change_08.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_fill_09* updates
    if (t >= 0.0 && row_fill_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_fill_09.tStart = t;  // (not accounting for frame time here)
      row_fill_09.frameNStart = frameN;  // exact frame index
      
      row_fill_09.setAutoDraw(true);
    }
    
    
    // if row_fill_09 is active this frame...
    if (row_fill_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_09* updates
    if (t >= 0.0 && no_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_09.tStart = t;  // (not accounting for frame time here)
      no_09.frameNStart = frameN;  // exact frame index
      
      no_09.setAutoDraw(true);
    }
    
    
    // if no_09 is active this frame...
    if (no_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_09* updates
    if (t >= 0.0 && gri_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_09.tStart = t;  // (not accounting for frame time here)
      gri_09.frameNStart = frameN;  // exact frame index
      
      gri_09.setAutoDraw(true);
    }
    
    
    // if gri_09 is active this frame...
    if (gri_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_09* updates
    if (t >= 0.0 && label_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_09.tStart = t;  // (not accounting for frame time here)
      label_09.frameNStart = frameN;  // exact frame index
      
      label_09.setAutoDraw(true);
    }
    
    
    // if label_09 is active this frame...
    if (label_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_09* updates
    if (t >= 0.0 && value_2024_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_09.tStart = t;  // (not accounting for frame time here)
      value_2024_09.frameNStart = frameN;  // exact frame index
      
      value_2024_09.setAutoDraw(true);
    }
    
    
    // if value_2024_09 is active this frame...
    if (value_2024_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_09* updates
    if (t >= 0.0 && value_2025_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_09.tStart = t;  // (not accounting for frame time here)
      value_2025_09.frameNStart = frameN;  // exact frame index
      
      value_2025_09.setAutoDraw(true);
    }
    
    
    // if value_2025_09 is active this frame...
    if (value_2025_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_09* updates
    if (t >= 0.0 && change_09.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_09.tStart = t;  // (not accounting for frame time here)
      change_09.frameNStart = frameN;  // exact frame index
      
      change_09.setAutoDraw(true);
    }
    
    
    // if change_09 is active this frame...
    if (change_09.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_10* updates
    if (t >= 0.0 && no_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_10.tStart = t;  // (not accounting for frame time here)
      no_10.frameNStart = frameN;  // exact frame index
      
      no_10.setAutoDraw(true);
    }
    
    
    // if no_10 is active this frame...
    if (no_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_10* updates
    if (t >= 0.0 && gri_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_10.tStart = t;  // (not accounting for frame time here)
      gri_10.frameNStart = frameN;  // exact frame index
      
      gri_10.setAutoDraw(true);
    }
    
    
    // if gri_10 is active this frame...
    if (gri_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_10* updates
    if (t >= 0.0 && label_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_10.tStart = t;  // (not accounting for frame time here)
      label_10.frameNStart = frameN;  // exact frame index
      
      label_10.setAutoDraw(true);
    }
    
    
    // if label_10 is active this frame...
    if (label_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_10* updates
    if (t >= 0.0 && value_2024_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_10.tStart = t;  // (not accounting for frame time here)
      value_2024_10.frameNStart = frameN;  // exact frame index
      
      value_2024_10.setAutoDraw(true);
    }
    
    
    // if value_2024_10 is active this frame...
    if (value_2024_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_10* updates
    if (t >= 0.0 && value_2025_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_10.tStart = t;  // (not accounting for frame time here)
      value_2025_10.frameNStart = frameN;  // exact frame index
      
      value_2025_10.setAutoDraw(true);
    }
    
    
    // if value_2025_10 is active this frame...
    if (value_2025_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_10* updates
    if (t >= 0.0 && change_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_10.tStart = t;  // (not accounting for frame time here)
      change_10.frameNStart = frameN;  // exact frame index
      
      change_10.setAutoDraw(true);
    }
    
    
    // if change_10 is active this frame...
    if (change_10.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_fill_11* updates
    if (t >= 0.0 && row_fill_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_fill_11.tStart = t;  // (not accounting for frame time here)
      row_fill_11.frameNStart = frameN;  // exact frame index
      
      row_fill_11.setAutoDraw(true);
    }
    
    
    // if row_fill_11 is active this frame...
    if (row_fill_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_11* updates
    if (t >= 0.0 && no_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_11.tStart = t;  // (not accounting for frame time here)
      no_11.frameNStart = frameN;  // exact frame index
      
      no_11.setAutoDraw(true);
    }
    
    
    // if no_11 is active this frame...
    if (no_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_11* updates
    if (t >= 0.0 && gri_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_11.tStart = t;  // (not accounting for frame time here)
      gri_11.frameNStart = frameN;  // exact frame index
      
      gri_11.setAutoDraw(true);
    }
    
    
    // if gri_11 is active this frame...
    if (gri_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_11* updates
    if (t >= 0.0 && label_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_11.tStart = t;  // (not accounting for frame time here)
      label_11.frameNStart = frameN;  // exact frame index
      
      label_11.setAutoDraw(true);
    }
    
    
    // if label_11 is active this frame...
    if (label_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_11* updates
    if (t >= 0.0 && value_2024_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_11.tStart = t;  // (not accounting for frame time here)
      value_2024_11.frameNStart = frameN;  // exact frame index
      
      value_2024_11.setAutoDraw(true);
    }
    
    
    // if value_2024_11 is active this frame...
    if (value_2024_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_11* updates
    if (t >= 0.0 && value_2025_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_11.tStart = t;  // (not accounting for frame time here)
      value_2025_11.frameNStart = frameN;  // exact frame index
      
      value_2025_11.setAutoDraw(true);
    }
    
    
    // if value_2025_11 is active this frame...
    if (value_2025_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_11* updates
    if (t >= 0.0 && change_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_11.tStart = t;  // (not accounting for frame time here)
      change_11.frameNStart = frameN;  // exact frame index
      
      change_11.setAutoDraw(true);
    }
    
    
    // if change_11 is active this frame...
    if (change_11.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_12* updates
    if (t >= 0.0 && no_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_12.tStart = t;  // (not accounting for frame time here)
      no_12.frameNStart = frameN;  // exact frame index
      
      no_12.setAutoDraw(true);
    }
    
    
    // if no_12 is active this frame...
    if (no_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_12* updates
    if (t >= 0.0 && gri_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_12.tStart = t;  // (not accounting for frame time here)
      gri_12.frameNStart = frameN;  // exact frame index
      
      gri_12.setAutoDraw(true);
    }
    
    
    // if gri_12 is active this frame...
    if (gri_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_12* updates
    if (t >= 0.0 && label_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_12.tStart = t;  // (not accounting for frame time here)
      label_12.frameNStart = frameN;  // exact frame index
      
      label_12.setAutoDraw(true);
    }
    
    
    // if label_12 is active this frame...
    if (label_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_12* updates
    if (t >= 0.0 && value_2024_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_12.tStart = t;  // (not accounting for frame time here)
      value_2024_12.frameNStart = frameN;  // exact frame index
      
      value_2024_12.setAutoDraw(true);
    }
    
    
    // if value_2024_12 is active this frame...
    if (value_2024_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_12* updates
    if (t >= 0.0 && value_2025_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_12.tStart = t;  // (not accounting for frame time here)
      value_2025_12.frameNStart = frameN;  // exact frame index
      
      value_2025_12.setAutoDraw(true);
    }
    
    
    // if value_2025_12 is active this frame...
    if (value_2025_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_12* updates
    if (t >= 0.0 && change_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_12.tStart = t;  // (not accounting for frame time here)
      change_12.frameNStart = frameN;  // exact frame index
      
      change_12.setAutoDraw(true);
    }
    
    
    // if change_12 is active this frame...
    if (change_12.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *row_fill_13* updates
    if (t >= 0.0 && row_fill_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      row_fill_13.tStart = t;  // (not accounting for frame time here)
      row_fill_13.frameNStart = frameN;  // exact frame index
      
      row_fill_13.setAutoDraw(true);
    }
    
    
    // if row_fill_13 is active this frame...
    if (row_fill_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *no_13* updates
    if (t >= 0.0 && no_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_13.tStart = t;  // (not accounting for frame time here)
      no_13.frameNStart = frameN;  // exact frame index
      
      no_13.setAutoDraw(true);
    }
    
    
    // if no_13 is active this frame...
    if (no_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_13* updates
    if (t >= 0.0 && gri_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_13.tStart = t;  // (not accounting for frame time here)
      gri_13.frameNStart = frameN;  // exact frame index
      
      gri_13.setAutoDraw(true);
    }
    
    
    // if gri_13 is active this frame...
    if (gri_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_13* updates
    if (t >= 0.0 && label_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_13.tStart = t;  // (not accounting for frame time here)
      label_13.frameNStart = frameN;  // exact frame index
      
      label_13.setAutoDraw(true);
    }
    
    
    // if label_13 is active this frame...
    if (label_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2024_13* updates
    if (t >= 0.0 && value_2024_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2024_13.tStart = t;  // (not accounting for frame time here)
      value_2024_13.frameNStart = frameN;  // exact frame index
      
      value_2024_13.setAutoDraw(true);
    }
    
    
    // if value_2024_13 is active this frame...
    if (value_2024_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *value_2025_13* updates
    if (t >= 0.0 && value_2025_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      value_2025_13.tStart = t;  // (not accounting for frame time here)
      value_2025_13.frameNStart = frameN;  // exact frame index
      
      value_2025_13.setAutoDraw(true);
    }
    
    
    // if value_2025_13 is active this frame...
    if (value_2025_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *change_13* updates
    if (t >= 0.0 && change_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      change_13.tStart = t;  // (not accounting for frame time here)
      change_13.frameNStart = frameN;  // exact frame index
      
      change_13.setAutoDraw(true);
    }
    
    
    // if change_13 is active this frame...
    if (change_13.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stimulus_table_next_button* updates
    if (t >= 0 && stimulus_table_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimulus_table_next_button.tStart = t;  // (not accounting for frame time here)
      stimulus_table_next_button.frameNStart = frameN;  // exact frame index
      
      stimulus_table_next_button.setAutoDraw(true);
    }
    
    
    // if stimulus_table_next_button is active this frame...
    if (stimulus_table_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (stimulus_table_next_button.status === PsychoJS.Status.STARTED) {
      // check whether stimulus_table_next_button has been pressed
      if (isButtonClickedResponsive(stimulus_table_next_button)) {
        if (!stimulus_table_next_button.wasClicked) {
          // store time of first click
          stimulus_table_next_button.timesOn.push(stimulus_table_next_button.clock.getTime());
          // store time clicked until
          stimulus_table_next_button.timesOff.push(stimulus_table_next_button.clock.getTime());
        } else {
          // update time clicked until;
          stimulus_table_next_button.timesOff[stimulus_table_next_button.timesOff.length - 1] = stimulus_table_next_button.clock.getTime();
        }
        if (!stimulus_table_next_button.wasClicked) {
          // end routine when stimulus_table_next_button is clicked
          continueRoutine = false;
          
        }
        // if stimulus_table_next_button is still clicked next frame, it is not a new click
        stimulus_table_next_button.wasClicked = true;
      } else {
        // if stimulus_table_next_button is clicked next frame, it is a new click
        stimulus_table_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if stimulus_table_next_button hasn't started / has finished
      stimulus_table_next_button.clock.reset();
      // if stimulus_table_next_button is clicked next frame, it is a new click
      stimulus_table_next_button.wasClicked = false;
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
    for (const thisComponent of stimulus_tableComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulus_tableRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimulus_table' ---
    for (const thisComponent of stimulus_tableComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimulus_table.stopped', globalClock.getTime());
    // Run 'End Routine' code from stimulus_timing
    psychoJS.experiment.addData("condition", condition);
    psychoJS.experiment.addData("stimulus_view_time", stimulus_clock.getTime());
    psychoJS.experiment.addData("pupil_connected", pupil_connected);
    psychoJS.experiment.addData("pupil_connection_error", pupil_connection_error);
    psychoJS.experiment.addData("pupil_time_offset", pupil_time_offset);
    psychoJS.experiment.addData('stimulus_table_next_button.numClicks', stimulus_table_next_button.numClicks);
    psychoJS.experiment.addData('stimulus_table_next_button.timesOn', stimulus_table_next_button.timesOn);
    psychoJS.experiment.addData('stimulus_table_next_button.timesOff', stimulus_table_next_button.timesOff);
    // the Routine "stimulus_table" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var esg_performance_screenMaxDurationReached;
var esg_performance_screen_next_clicked;
var esg_performance_screenMaxDuration;
var esg_performance_screenComponents;
function esg_performance_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'esg_performance_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    esg_performance_screenClock.reset();
    routineTimer.reset();
    esg_performance_screenMaxDurationReached = false;
    // update component parameters for each repeat
    esg_performance.reset()
    // Run 'Begin Routine' code from esg_performance_screen_validation_code
    validation_message = "";
    esg_performance_screen_next_clicked = false;
    // reset esg_performance_screen_next_button to account for continued clicks & clear times on/off
    esg_performance_screen_next_button.reset()
    psychoJS.experiment.addData('esg_performance_screen.started', globalClock.getTime());
    esg_performance_screenMaxDuration = None
    // keep track of which components have finished
    esg_performance_screenComponents = [];
    esg_performance_screenComponents.push(esg_performance_screen_title);
    esg_performance_screenComponents.push(esg_performance_question);
    esg_performance_screenComponents.push(esg_performance);
    esg_performance_screenComponents.push(esg_performance_left);
    esg_performance_screenComponents.push(esg_performance_right);
    esg_performance_screenComponents.push(esg_performance_screen_validation);
    esg_performance_screenComponents.push(esg_performance_screen_next_button);
    
    for (const thisComponent of esg_performance_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function esg_performance_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'esg_performance_screen' ---
    // get current time
    t = esg_performance_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *esg_performance_screen_title* updates
    if (t >= 0.0 && esg_performance_screen_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_performance_screen_title.tStart = t;  // (not accounting for frame time here)
      esg_performance_screen_title.frameNStart = frameN;  // exact frame index
      
      esg_performance_screen_title.setAutoDraw(true);
    }
    
    
    // if esg_performance_screen_title is active this frame...
    if (esg_performance_screen_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_performance_question* updates
    if (t >= 0.0 && esg_performance_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_performance_question.tStart = t;  // (not accounting for frame time here)
      esg_performance_question.frameNStart = frameN;  // exact frame index
      
      esg_performance_question.setAutoDraw(true);
    }
    
    
    // if esg_performance_question is active this frame...
    if (esg_performance_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_performance* updates
    if (t >= 0.0 && esg_performance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_performance.tStart = t;  // (not accounting for frame time here)
      esg_performance.frameNStart = frameN;  // exact frame index
      
      esg_performance.setAutoDraw(true);
    }
    
    
    // if esg_performance is active this frame...
    if (esg_performance.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_performance_left* updates
    if (t >= 0.0 && esg_performance_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_performance_left.tStart = t;  // (not accounting for frame time here)
      esg_performance_left.frameNStart = frameN;  // exact frame index
      
      esg_performance_left.setAutoDraw(true);
    }
    
    
    // if esg_performance_left is active this frame...
    if (esg_performance_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_performance_right* updates
    if (t >= 0.0 && esg_performance_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_performance_right.tStart = t;  // (not accounting for frame time here)
      esg_performance_right.frameNStart = frameN;  // exact frame index
      
      esg_performance_right.setAutoDraw(true);
    }
    
    
    // if esg_performance_right is active this frame...
    if (esg_performance_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_performance_screen_validation* updates
    if (t >= 0.0 && esg_performance_screen_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      esg_performance_screen_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      esg_performance_screen_validation.tStart = t;  // (not accounting for frame time here)
      esg_performance_screen_validation.frameNStart = frameN;  // exact frame index
      
      esg_performance_screen_validation.setAutoDraw(true);
    }
    
    
    // if esg_performance_screen_validation is active this frame...
    if (esg_performance_screen_validation.status === PsychoJS.Status.STARTED) {
      // update params
      esg_performance_screen_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from esg_performance_screen_validation_code
    if (isButtonClickedResponsive(esg_performance_screen_next_button)) {
        if (esg_performance.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "回答を選択してください。";
        }
    }
    
    // *esg_performance_screen_next_button* updates
    if (t >= 0 && esg_performance_screen_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_performance_screen_next_button.tStart = t;  // (not accounting for frame time here)
      esg_performance_screen_next_button.frameNStart = frameN;  // exact frame index
      
      esg_performance_screen_next_button.setAutoDraw(true);
    }
    
    
    // if esg_performance_screen_next_button is active this frame...
    if (esg_performance_screen_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (esg_performance_screen_next_button.status === PsychoJS.Status.STARTED) {
      // check whether esg_performance_screen_next_button has been pressed
      if (isButtonClickedResponsive(esg_performance_screen_next_button)) {
        if (!esg_performance_screen_next_button.wasClicked) {
          // store time of first click
          esg_performance_screen_next_button.timesOn.push(esg_performance_screen_next_button.clock.getTime());
          // store time clicked until
          esg_performance_screen_next_button.timesOff.push(esg_performance_screen_next_button.clock.getTime());
        } else {
          // update time clicked until;
          esg_performance_screen_next_button.timesOff[esg_performance_screen_next_button.timesOff.length - 1] = esg_performance_screen_next_button.clock.getTime();
        }
        if (!esg_performance_screen_next_button.wasClicked) {
          
        }
        // if esg_performance_screen_next_button is still clicked next frame, it is not a new click
        esg_performance_screen_next_button.wasClicked = true;
      } else {
        // if esg_performance_screen_next_button is clicked next frame, it is a new click
        esg_performance_screen_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if esg_performance_screen_next_button hasn't started / has finished
      esg_performance_screen_next_button.clock.reset();
      // if esg_performance_screen_next_button is clicked next frame, it is a new click
      esg_performance_screen_next_button.wasClicked = false;
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
    for (const thisComponent of esg_performance_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function esg_performance_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'esg_performance_screen' ---
    for (const thisComponent of esg_performance_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('esg_performance_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('esg_performance.response', esg_performance.getRating());
    psychoJS.experiment.addData('esg_performance.rt', esg_performance.getRT());
    psychoJS.experiment.addData('esg_performance_screen_next_button.numClicks', esg_performance_screen_next_button.numClicks);
    psychoJS.experiment.addData('esg_performance_screen_next_button.timesOn', esg_performance_screen_next_button.timesOn);
    psychoJS.experiment.addData('esg_performance_screen_next_button.timesOff', esg_performance_screen_next_button.timesOff);
    // the Routine "esg_performance_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var esg_difficulty_screenMaxDurationReached;
var esg_difficulty_screen_next_clicked;
var esg_difficulty_screenMaxDuration;
var esg_difficulty_screenComponents;
function esg_difficulty_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'esg_difficulty_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    esg_difficulty_screenClock.reset();
    routineTimer.reset();
    esg_difficulty_screenMaxDurationReached = false;
    // update component parameters for each repeat
    esg_difficulty.reset()
    // Run 'Begin Routine' code from esg_difficulty_screen_validation_code
    validation_message = "";
    esg_difficulty_screen_next_clicked = false;
    // reset esg_difficulty_screen_next_button to account for continued clicks & clear times on/off
    esg_difficulty_screen_next_button.reset()
    psychoJS.experiment.addData('esg_difficulty_screen.started', globalClock.getTime());
    esg_difficulty_screenMaxDuration = None
    // keep track of which components have finished
    esg_difficulty_screenComponents = [];
    esg_difficulty_screenComponents.push(esg_difficulty_screen_title);
    esg_difficulty_screenComponents.push(esg_difficulty_question);
    esg_difficulty_screenComponents.push(esg_difficulty);
    esg_difficulty_screenComponents.push(esg_difficulty_left);
    esg_difficulty_screenComponents.push(esg_difficulty_right);
    esg_difficulty_screenComponents.push(esg_difficulty_screen_validation);
    esg_difficulty_screenComponents.push(esg_difficulty_screen_next_button);
    
    for (const thisComponent of esg_difficulty_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function esg_difficulty_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'esg_difficulty_screen' ---
    // get current time
    t = esg_difficulty_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *esg_difficulty_screen_title* updates
    if (t >= 0.0 && esg_difficulty_screen_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_difficulty_screen_title.tStart = t;  // (not accounting for frame time here)
      esg_difficulty_screen_title.frameNStart = frameN;  // exact frame index
      
      esg_difficulty_screen_title.setAutoDraw(true);
    }
    
    
    // if esg_difficulty_screen_title is active this frame...
    if (esg_difficulty_screen_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_difficulty_question* updates
    if (t >= 0.0 && esg_difficulty_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_difficulty_question.tStart = t;  // (not accounting for frame time here)
      esg_difficulty_question.frameNStart = frameN;  // exact frame index
      
      esg_difficulty_question.setAutoDraw(true);
    }
    
    
    // if esg_difficulty_question is active this frame...
    if (esg_difficulty_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_difficulty* updates
    if (t >= 0.0 && esg_difficulty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_difficulty.tStart = t;  // (not accounting for frame time here)
      esg_difficulty.frameNStart = frameN;  // exact frame index
      
      esg_difficulty.setAutoDraw(true);
    }
    
    
    // if esg_difficulty is active this frame...
    if (esg_difficulty.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_difficulty_left* updates
    if (t >= 0.0 && esg_difficulty_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_difficulty_left.tStart = t;  // (not accounting for frame time here)
      esg_difficulty_left.frameNStart = frameN;  // exact frame index
      
      esg_difficulty_left.setAutoDraw(true);
    }
    
    
    // if esg_difficulty_left is active this frame...
    if (esg_difficulty_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_difficulty_right* updates
    if (t >= 0.0 && esg_difficulty_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_difficulty_right.tStart = t;  // (not accounting for frame time here)
      esg_difficulty_right.frameNStart = frameN;  // exact frame index
      
      esg_difficulty_right.setAutoDraw(true);
    }
    
    
    // if esg_difficulty_right is active this frame...
    if (esg_difficulty_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_difficulty_screen_validation* updates
    if (t >= 0.0 && esg_difficulty_screen_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      esg_difficulty_screen_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      esg_difficulty_screen_validation.tStart = t;  // (not accounting for frame time here)
      esg_difficulty_screen_validation.frameNStart = frameN;  // exact frame index
      
      esg_difficulty_screen_validation.setAutoDraw(true);
    }
    
    
    // if esg_difficulty_screen_validation is active this frame...
    if (esg_difficulty_screen_validation.status === PsychoJS.Status.STARTED) {
      // update params
      esg_difficulty_screen_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from esg_difficulty_screen_validation_code
    if (isButtonClickedResponsive(esg_difficulty_screen_next_button)) {
        if (esg_difficulty.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "回答を選択してください。";
        }
    }
    
    // *esg_difficulty_screen_next_button* updates
    if (t >= 0 && esg_difficulty_screen_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_difficulty_screen_next_button.tStart = t;  // (not accounting for frame time here)
      esg_difficulty_screen_next_button.frameNStart = frameN;  // exact frame index
      
      esg_difficulty_screen_next_button.setAutoDraw(true);
    }
    
    
    // if esg_difficulty_screen_next_button is active this frame...
    if (esg_difficulty_screen_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (esg_difficulty_screen_next_button.status === PsychoJS.Status.STARTED) {
      // check whether esg_difficulty_screen_next_button has been pressed
      if (isButtonClickedResponsive(esg_difficulty_screen_next_button)) {
        if (!esg_difficulty_screen_next_button.wasClicked) {
          // store time of first click
          esg_difficulty_screen_next_button.timesOn.push(esg_difficulty_screen_next_button.clock.getTime());
          // store time clicked until
          esg_difficulty_screen_next_button.timesOff.push(esg_difficulty_screen_next_button.clock.getTime());
        } else {
          // update time clicked until;
          esg_difficulty_screen_next_button.timesOff[esg_difficulty_screen_next_button.timesOff.length - 1] = esg_difficulty_screen_next_button.clock.getTime();
        }
        if (!esg_difficulty_screen_next_button.wasClicked) {
          
        }
        // if esg_difficulty_screen_next_button is still clicked next frame, it is not a new click
        esg_difficulty_screen_next_button.wasClicked = true;
      } else {
        // if esg_difficulty_screen_next_button is clicked next frame, it is a new click
        esg_difficulty_screen_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if esg_difficulty_screen_next_button hasn't started / has finished
      esg_difficulty_screen_next_button.clock.reset();
      // if esg_difficulty_screen_next_button is clicked next frame, it is a new click
      esg_difficulty_screen_next_button.wasClicked = false;
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
    for (const thisComponent of esg_difficulty_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function esg_difficulty_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'esg_difficulty_screen' ---
    for (const thisComponent of esg_difficulty_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('esg_difficulty_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('esg_difficulty.response', esg_difficulty.getRating());
    psychoJS.experiment.addData('esg_difficulty.rt', esg_difficulty.getRT());
    psychoJS.experiment.addData('esg_difficulty_screen_next_button.numClicks', esg_difficulty_screen_next_button.numClicks);
    psychoJS.experiment.addData('esg_difficulty_screen_next_button.timesOn', esg_difficulty_screen_next_button.timesOn);
    psychoJS.experiment.addData('esg_difficulty_screen_next_button.timesOff', esg_difficulty_screen_next_button.timesOff);
    // the Routine "esg_difficulty_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var label_difficulty_screenMaxDurationReached;
var label_difficulty_screen_next_clicked;
var label_difficulty_screenMaxDuration;
var label_difficulty_screenComponents;
function label_difficulty_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'label_difficulty_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    label_difficulty_screenClock.reset();
    routineTimer.reset();
    label_difficulty_screenMaxDurationReached = false;
    // update component parameters for each repeat
    label_difficulty.reset()
    // Run 'Begin Routine' code from label_difficulty_screen_validation_code
    validation_message = "";
    label_difficulty_screen_next_clicked = false;
    // reset label_difficulty_screen_next_button to account for continued clicks & clear times on/off
    label_difficulty_screen_next_button.reset()
    psychoJS.experiment.addData('label_difficulty_screen.started', globalClock.getTime());
    label_difficulty_screenMaxDuration = None
    // keep track of which components have finished
    label_difficulty_screenComponents = [];
    label_difficulty_screenComponents.push(label_difficulty_screen_title);
    label_difficulty_screenComponents.push(label_difficulty_question);
    label_difficulty_screenComponents.push(label_difficulty);
    label_difficulty_screenComponents.push(label_difficulty_left);
    label_difficulty_screenComponents.push(label_difficulty_right);
    label_difficulty_screenComponents.push(label_difficulty_screen_validation);
    label_difficulty_screenComponents.push(label_difficulty_screen_next_button);
    
    for (const thisComponent of label_difficulty_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function label_difficulty_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'label_difficulty_screen' ---
    // get current time
    t = label_difficulty_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *label_difficulty_screen_title* updates
    if (t >= 0.0 && label_difficulty_screen_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_difficulty_screen_title.tStart = t;  // (not accounting for frame time here)
      label_difficulty_screen_title.frameNStart = frameN;  // exact frame index
      
      label_difficulty_screen_title.setAutoDraw(true);
    }
    
    
    // if label_difficulty_screen_title is active this frame...
    if (label_difficulty_screen_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_difficulty_question* updates
    if (t >= 0.0 && label_difficulty_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_difficulty_question.tStart = t;  // (not accounting for frame time here)
      label_difficulty_question.frameNStart = frameN;  // exact frame index
      
      label_difficulty_question.setAutoDraw(true);
    }
    
    
    // if label_difficulty_question is active this frame...
    if (label_difficulty_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_difficulty* updates
    if (t >= 0.0 && label_difficulty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_difficulty.tStart = t;  // (not accounting for frame time here)
      label_difficulty.frameNStart = frameN;  // exact frame index
      
      label_difficulty.setAutoDraw(true);
    }
    
    
    // if label_difficulty is active this frame...
    if (label_difficulty.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_difficulty_left* updates
    if (t >= 0.0 && label_difficulty_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_difficulty_left.tStart = t;  // (not accounting for frame time here)
      label_difficulty_left.frameNStart = frameN;  // exact frame index
      
      label_difficulty_left.setAutoDraw(true);
    }
    
    
    // if label_difficulty_left is active this frame...
    if (label_difficulty_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_difficulty_right* updates
    if (t >= 0.0 && label_difficulty_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_difficulty_right.tStart = t;  // (not accounting for frame time here)
      label_difficulty_right.frameNStart = frameN;  // exact frame index
      
      label_difficulty_right.setAutoDraw(true);
    }
    
    
    // if label_difficulty_right is active this frame...
    if (label_difficulty_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *label_difficulty_screen_validation* updates
    if (t >= 0.0 && label_difficulty_screen_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      label_difficulty_screen_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      label_difficulty_screen_validation.tStart = t;  // (not accounting for frame time here)
      label_difficulty_screen_validation.frameNStart = frameN;  // exact frame index
      
      label_difficulty_screen_validation.setAutoDraw(true);
    }
    
    
    // if label_difficulty_screen_validation is active this frame...
    if (label_difficulty_screen_validation.status === PsychoJS.Status.STARTED) {
      // update params
      label_difficulty_screen_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from label_difficulty_screen_validation_code
    if (isButtonClickedResponsive(label_difficulty_screen_next_button)) {
        if (label_difficulty.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "回答を選択してください。";
        }
    }
    
    // *label_difficulty_screen_next_button* updates
    if (t >= 0 && label_difficulty_screen_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_difficulty_screen_next_button.tStart = t;  // (not accounting for frame time here)
      label_difficulty_screen_next_button.frameNStart = frameN;  // exact frame index
      
      label_difficulty_screen_next_button.setAutoDraw(true);
    }
    
    
    // if label_difficulty_screen_next_button is active this frame...
    if (label_difficulty_screen_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (label_difficulty_screen_next_button.status === PsychoJS.Status.STARTED) {
      // check whether label_difficulty_screen_next_button has been pressed
      if (isButtonClickedResponsive(label_difficulty_screen_next_button)) {
        if (!label_difficulty_screen_next_button.wasClicked) {
          // store time of first click
          label_difficulty_screen_next_button.timesOn.push(label_difficulty_screen_next_button.clock.getTime());
          // store time clicked until
          label_difficulty_screen_next_button.timesOff.push(label_difficulty_screen_next_button.clock.getTime());
        } else {
          // update time clicked until;
          label_difficulty_screen_next_button.timesOff[label_difficulty_screen_next_button.timesOff.length - 1] = label_difficulty_screen_next_button.clock.getTime();
        }
        if (!label_difficulty_screen_next_button.wasClicked) {
          
        }
        // if label_difficulty_screen_next_button is still clicked next frame, it is not a new click
        label_difficulty_screen_next_button.wasClicked = true;
      } else {
        // if label_difficulty_screen_next_button is clicked next frame, it is a new click
        label_difficulty_screen_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if label_difficulty_screen_next_button hasn't started / has finished
      label_difficulty_screen_next_button.clock.reset();
      // if label_difficulty_screen_next_button is clicked next frame, it is a new click
      label_difficulty_screen_next_button.wasClicked = false;
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
    for (const thisComponent of label_difficulty_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function label_difficulty_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'label_difficulty_screen' ---
    for (const thisComponent of label_difficulty_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('label_difficulty_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('label_difficulty.response', label_difficulty.getRating());
    psychoJS.experiment.addData('label_difficulty.rt', label_difficulty.getRT());
    psychoJS.experiment.addData('label_difficulty_screen_next_button.numClicks', label_difficulty_screen_next_button.numClicks);
    psychoJS.experiment.addData('label_difficulty_screen_next_button.timesOn', label_difficulty_screen_next_button.timesOn);
    psychoJS.experiment.addData('label_difficulty_screen_next_button.timesOff', label_difficulty_screen_next_button.timesOff);
    // the Routine "label_difficulty_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var investment_intention_screenMaxDurationReached;
var investment_intention_screen_next_clicked;
var investment_intention_screenMaxDuration;
var investment_intention_screenComponents;
function investment_intention_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'investment_intention_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    investment_intention_screenClock.reset();
    routineTimer.reset();
    investment_intention_screenMaxDurationReached = false;
    // update component parameters for each repeat
    investment_intention.reset()
    // Run 'Begin Routine' code from investment_intention_screen_validation_code
    validation_message = "";
    investment_intention_screen_next_clicked = false;
    // reset investment_intention_screen_next_button to account for continued clicks & clear times on/off
    investment_intention_screen_next_button.reset()
    psychoJS.experiment.addData('investment_intention_screen.started', globalClock.getTime());
    investment_intention_screenMaxDuration = None
    // keep track of which components have finished
    investment_intention_screenComponents = [];
    investment_intention_screenComponents.push(investment_intention_screen_title);
    investment_intention_screenComponents.push(investment_intention_question);
    investment_intention_screenComponents.push(investment_intention);
    investment_intention_screenComponents.push(investment_intention_left);
    investment_intention_screenComponents.push(investment_intention_right);
    investment_intention_screenComponents.push(investment_intention_screen_validation);
    investment_intention_screenComponents.push(investment_intention_screen_next_button);
    
    for (const thisComponent of investment_intention_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function investment_intention_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'investment_intention_screen' ---
    // get current time
    t = investment_intention_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *investment_intention_screen_title* updates
    if (t >= 0.0 && investment_intention_screen_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_intention_screen_title.tStart = t;  // (not accounting for frame time here)
      investment_intention_screen_title.frameNStart = frameN;  // exact frame index
      
      investment_intention_screen_title.setAutoDraw(true);
    }
    
    
    // if investment_intention_screen_title is active this frame...
    if (investment_intention_screen_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_intention_question* updates
    if (t >= 0.0 && investment_intention_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_intention_question.tStart = t;  // (not accounting for frame time here)
      investment_intention_question.frameNStart = frameN;  // exact frame index
      
      investment_intention_question.setAutoDraw(true);
    }
    
    
    // if investment_intention_question is active this frame...
    if (investment_intention_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_intention* updates
    if (t >= 0.0 && investment_intention.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_intention.tStart = t;  // (not accounting for frame time here)
      investment_intention.frameNStart = frameN;  // exact frame index
      
      investment_intention.setAutoDraw(true);
    }
    
    
    // if investment_intention is active this frame...
    if (investment_intention.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_intention_left* updates
    if (t >= 0.0 && investment_intention_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_intention_left.tStart = t;  // (not accounting for frame time here)
      investment_intention_left.frameNStart = frameN;  // exact frame index
      
      investment_intention_left.setAutoDraw(true);
    }
    
    
    // if investment_intention_left is active this frame...
    if (investment_intention_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_intention_right* updates
    if (t >= 0.0 && investment_intention_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_intention_right.tStart = t;  // (not accounting for frame time here)
      investment_intention_right.frameNStart = frameN;  // exact frame index
      
      investment_intention_right.setAutoDraw(true);
    }
    
    
    // if investment_intention_right is active this frame...
    if (investment_intention_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_intention_screen_validation* updates
    if (t >= 0.0 && investment_intention_screen_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      investment_intention_screen_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      investment_intention_screen_validation.tStart = t;  // (not accounting for frame time here)
      investment_intention_screen_validation.frameNStart = frameN;  // exact frame index
      
      investment_intention_screen_validation.setAutoDraw(true);
    }
    
    
    // if investment_intention_screen_validation is active this frame...
    if (investment_intention_screen_validation.status === PsychoJS.Status.STARTED) {
      // update params
      investment_intention_screen_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from investment_intention_screen_validation_code
    if (isButtonClickedResponsive(investment_intention_screen_next_button)) {
        if (investment_intention.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "回答を選択してください。";
        }
    }
    
    // *investment_intention_screen_next_button* updates
    if (t >= 0 && investment_intention_screen_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_intention_screen_next_button.tStart = t;  // (not accounting for frame time here)
      investment_intention_screen_next_button.frameNStart = frameN;  // exact frame index
      
      investment_intention_screen_next_button.setAutoDraw(true);
    }
    
    
    // if investment_intention_screen_next_button is active this frame...
    if (investment_intention_screen_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (investment_intention_screen_next_button.status === PsychoJS.Status.STARTED) {
      // check whether investment_intention_screen_next_button has been pressed
      if (isButtonClickedResponsive(investment_intention_screen_next_button)) {
        if (!investment_intention_screen_next_button.wasClicked) {
          // store time of first click
          investment_intention_screen_next_button.timesOn.push(investment_intention_screen_next_button.clock.getTime());
          // store time clicked until
          investment_intention_screen_next_button.timesOff.push(investment_intention_screen_next_button.clock.getTime());
        } else {
          // update time clicked until;
          investment_intention_screen_next_button.timesOff[investment_intention_screen_next_button.timesOff.length - 1] = investment_intention_screen_next_button.clock.getTime();
        }
        if (!investment_intention_screen_next_button.wasClicked) {
          
        }
        // if investment_intention_screen_next_button is still clicked next frame, it is not a new click
        investment_intention_screen_next_button.wasClicked = true;
      } else {
        // if investment_intention_screen_next_button is clicked next frame, it is a new click
        investment_intention_screen_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if investment_intention_screen_next_button hasn't started / has finished
      investment_intention_screen_next_button.clock.reset();
      // if investment_intention_screen_next_button is clicked next frame, it is a new click
      investment_intention_screen_next_button.wasClicked = false;
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
    for (const thisComponent of investment_intention_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function investment_intention_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'investment_intention_screen' ---
    for (const thisComponent of investment_intention_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('investment_intention_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('investment_intention.response', investment_intention.getRating());
    psychoJS.experiment.addData('investment_intention.rt', investment_intention.getRT());
    psychoJS.experiment.addData('investment_intention_screen_next_button.numClicks', investment_intention_screen_next_button.numClicks);
    psychoJS.experiment.addData('investment_intention_screen_next_button.timesOn', investment_intention_screen_next_button.timesOn);
    psychoJS.experiment.addData('investment_intention_screen_next_button.timesOff', investment_intention_screen_next_button.timesOff);
    // the Routine "investment_intention_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var perceived_standardization_screenMaxDurationReached;
var perceived_standardization_screen_next_clicked;
var perceived_standardization_screenMaxDuration;
var perceived_standardization_screenComponents;
function perceived_standardization_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'perceived_standardization_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    perceived_standardization_screenClock.reset();
    routineTimer.reset();
    perceived_standardization_screenMaxDurationReached = false;
    // update component parameters for each repeat
    perceived_standardization.reset()
    // Run 'Begin Routine' code from perceived_standardization_screen_validation_code
    validation_message = "";
    perceived_standardization_screen_next_clicked = false;
    // reset perceived_standardization_screen_next_button to account for continued clicks & clear times on/off
    perceived_standardization_screen_next_button.reset()
    psychoJS.experiment.addData('perceived_standardization_screen.started', globalClock.getTime());
    perceived_standardization_screenMaxDuration = None
    // keep track of which components have finished
    perceived_standardization_screenComponents = [];
    perceived_standardization_screenComponents.push(perceived_standardization_screen_title);
    perceived_standardization_screenComponents.push(perceived_standardization_question);
    perceived_standardization_screenComponents.push(perceived_standardization);
    perceived_standardization_screenComponents.push(perceived_standardization_left);
    perceived_standardization_screenComponents.push(perceived_standardization_right);
    perceived_standardization_screenComponents.push(perceived_standardization_screen_validation);
    perceived_standardization_screenComponents.push(perceived_standardization_screen_next_button);
    
    for (const thisComponent of perceived_standardization_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function perceived_standardization_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'perceived_standardization_screen' ---
    // get current time
    t = perceived_standardization_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *perceived_standardization_screen_title* updates
    if (t >= 0.0 && perceived_standardization_screen_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perceived_standardization_screen_title.tStart = t;  // (not accounting for frame time here)
      perceived_standardization_screen_title.frameNStart = frameN;  // exact frame index
      
      perceived_standardization_screen_title.setAutoDraw(true);
    }
    
    
    // if perceived_standardization_screen_title is active this frame...
    if (perceived_standardization_screen_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *perceived_standardization_question* updates
    if (t >= 0.0 && perceived_standardization_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perceived_standardization_question.tStart = t;  // (not accounting for frame time here)
      perceived_standardization_question.frameNStart = frameN;  // exact frame index
      
      perceived_standardization_question.setAutoDraw(true);
    }
    
    
    // if perceived_standardization_question is active this frame...
    if (perceived_standardization_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *perceived_standardization* updates
    if (t >= 0.0 && perceived_standardization.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perceived_standardization.tStart = t;  // (not accounting for frame time here)
      perceived_standardization.frameNStart = frameN;  // exact frame index
      
      perceived_standardization.setAutoDraw(true);
    }
    
    
    // if perceived_standardization is active this frame...
    if (perceived_standardization.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *perceived_standardization_left* updates
    if (t >= 0.0 && perceived_standardization_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perceived_standardization_left.tStart = t;  // (not accounting for frame time here)
      perceived_standardization_left.frameNStart = frameN;  // exact frame index
      
      perceived_standardization_left.setAutoDraw(true);
    }
    
    
    // if perceived_standardization_left is active this frame...
    if (perceived_standardization_left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *perceived_standardization_right* updates
    if (t >= 0.0 && perceived_standardization_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perceived_standardization_right.tStart = t;  // (not accounting for frame time here)
      perceived_standardization_right.frameNStart = frameN;  // exact frame index
      
      perceived_standardization_right.setAutoDraw(true);
    }
    
    
    // if perceived_standardization_right is active this frame...
    if (perceived_standardization_right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *perceived_standardization_screen_validation* updates
    if (t >= 0.0 && perceived_standardization_screen_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      perceived_standardization_screen_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      perceived_standardization_screen_validation.tStart = t;  // (not accounting for frame time here)
      perceived_standardization_screen_validation.frameNStart = frameN;  // exact frame index
      
      perceived_standardization_screen_validation.setAutoDraw(true);
    }
    
    
    // if perceived_standardization_screen_validation is active this frame...
    if (perceived_standardization_screen_validation.status === PsychoJS.Status.STARTED) {
      // update params
      perceived_standardization_screen_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from perceived_standardization_screen_validation_code
    if (isButtonClickedResponsive(perceived_standardization_screen_next_button)) {
        if (perceived_standardization.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "回答を選択してください。";
        }
    }
    
    // *perceived_standardization_screen_next_button* updates
    if (t >= 0 && perceived_standardization_screen_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      perceived_standardization_screen_next_button.tStart = t;  // (not accounting for frame time here)
      perceived_standardization_screen_next_button.frameNStart = frameN;  // exact frame index
      
      perceived_standardization_screen_next_button.setAutoDraw(true);
    }
    
    
    // if perceived_standardization_screen_next_button is active this frame...
    if (perceived_standardization_screen_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (perceived_standardization_screen_next_button.status === PsychoJS.Status.STARTED) {
      // check whether perceived_standardization_screen_next_button has been pressed
      if (isButtonClickedResponsive(perceived_standardization_screen_next_button)) {
        if (!perceived_standardization_screen_next_button.wasClicked) {
          // store time of first click
          perceived_standardization_screen_next_button.timesOn.push(perceived_standardization_screen_next_button.clock.getTime());
          // store time clicked until
          perceived_standardization_screen_next_button.timesOff.push(perceived_standardization_screen_next_button.clock.getTime());
        } else {
          // update time clicked until;
          perceived_standardization_screen_next_button.timesOff[perceived_standardization_screen_next_button.timesOff.length - 1] = perceived_standardization_screen_next_button.clock.getTime();
        }
        if (!perceived_standardization_screen_next_button.wasClicked) {
          
        }
        // if perceived_standardization_screen_next_button is still clicked next frame, it is not a new click
        perceived_standardization_screen_next_button.wasClicked = true;
      } else {
        // if perceived_standardization_screen_next_button is clicked next frame, it is a new click
        perceived_standardization_screen_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if perceived_standardization_screen_next_button hasn't started / has finished
      perceived_standardization_screen_next_button.clock.reset();
      // if perceived_standardization_screen_next_button is clicked next frame, it is a new click
      perceived_standardization_screen_next_button.wasClicked = false;
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
    for (const thisComponent of perceived_standardization_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function perceived_standardization_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'perceived_standardization_screen' ---
    for (const thisComponent of perceived_standardization_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('perceived_standardization_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('perceived_standardization.response', perceived_standardization.getRating());
    psychoJS.experiment.addData('perceived_standardization.rt', perceived_standardization.getRT());
    psychoJS.experiment.addData('perceived_standardization_screen_next_button.numClicks', perceived_standardization_screen_next_button.numClicks);
    psychoJS.experiment.addData('perceived_standardization_screen_next_button.timesOn', perceived_standardization_screen_next_button.timesOn);
    psychoJS.experiment.addData('perceived_standardization_screen_next_button.timesOff', perceived_standardization_screen_next_button.timesOff);
    // the Routine "perceived_standardization_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var esg_familiarity_screenMaxDurationReached;
var esg_familiarity_screen_next_clicked;
var esg_familiarity_screenMaxDuration;
var esg_familiarity_screenComponents;
function esg_familiarity_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'esg_familiarity_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    esg_familiarity_screenClock.reset();
    routineTimer.reset();
    esg_familiarity_screenMaxDurationReached = false;
    // update component parameters for each repeat
    esg_familiarity.reset()
    // Run 'Begin Routine' code from esg_familiarity_screen_validation_code
    validation_message = "";
    esg_familiarity_screen_next_clicked = false;
    // reset esg_familiarity_screen_next_button to account for continued clicks & clear times on/off
    esg_familiarity_screen_next_button.reset()
    psychoJS.experiment.addData('esg_familiarity_screen.started', globalClock.getTime());
    esg_familiarity_screenMaxDuration = None
    // keep track of which components have finished
    esg_familiarity_screenComponents = [];
    esg_familiarity_screenComponents.push(esg_familiarity_screen_title);
    esg_familiarity_screenComponents.push(esg_familiarity_question);
    esg_familiarity_screenComponents.push(esg_familiarity);
    esg_familiarity_screenComponents.push(esg_familiarity_screen_validation);
    esg_familiarity_screenComponents.push(esg_familiarity_screen_next_button);
    
    for (const thisComponent of esg_familiarity_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function esg_familiarity_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'esg_familiarity_screen' ---
    // get current time
    t = esg_familiarity_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *esg_familiarity_screen_title* updates
    if (t >= 0.0 && esg_familiarity_screen_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_familiarity_screen_title.tStart = t;  // (not accounting for frame time here)
      esg_familiarity_screen_title.frameNStart = frameN;  // exact frame index
      
      esg_familiarity_screen_title.setAutoDraw(true);
    }
    
    
    // if esg_familiarity_screen_title is active this frame...
    if (esg_familiarity_screen_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_familiarity_question* updates
    if (t >= 0.0 && esg_familiarity_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_familiarity_question.tStart = t;  // (not accounting for frame time here)
      esg_familiarity_question.frameNStart = frameN;  // exact frame index
      
      esg_familiarity_question.setAutoDraw(true);
    }
    
    
    // if esg_familiarity_question is active this frame...
    if (esg_familiarity_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_familiarity* updates
    if (t >= 0.0 && esg_familiarity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_familiarity.tStart = t;  // (not accounting for frame time here)
      esg_familiarity.frameNStart = frameN;  // exact frame index
      
      esg_familiarity.setAutoDraw(true);
    }
    
    
    // if esg_familiarity is active this frame...
    if (esg_familiarity.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *esg_familiarity_screen_validation* updates
    if (t >= 0.0 && esg_familiarity_screen_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      esg_familiarity_screen_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      esg_familiarity_screen_validation.tStart = t;  // (not accounting for frame time here)
      esg_familiarity_screen_validation.frameNStart = frameN;  // exact frame index
      
      esg_familiarity_screen_validation.setAutoDraw(true);
    }
    
    
    // if esg_familiarity_screen_validation is active this frame...
    if (esg_familiarity_screen_validation.status === PsychoJS.Status.STARTED) {
      // update params
      esg_familiarity_screen_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from esg_familiarity_screen_validation_code
    if (isButtonClickedResponsive(esg_familiarity_screen_next_button)) {
        if (esg_familiarity.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "回答を選択してください。";
        }
    }
    
    // *esg_familiarity_screen_next_button* updates
    if (t >= 0 && esg_familiarity_screen_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      esg_familiarity_screen_next_button.tStart = t;  // (not accounting for frame time here)
      esg_familiarity_screen_next_button.frameNStart = frameN;  // exact frame index
      
      esg_familiarity_screen_next_button.setAutoDraw(true);
    }
    
    
    // if esg_familiarity_screen_next_button is active this frame...
    if (esg_familiarity_screen_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (esg_familiarity_screen_next_button.status === PsychoJS.Status.STARTED) {
      // check whether esg_familiarity_screen_next_button has been pressed
      if (isButtonClickedResponsive(esg_familiarity_screen_next_button)) {
        if (!esg_familiarity_screen_next_button.wasClicked) {
          // store time of first click
          esg_familiarity_screen_next_button.timesOn.push(esg_familiarity_screen_next_button.clock.getTime());
          // store time clicked until
          esg_familiarity_screen_next_button.timesOff.push(esg_familiarity_screen_next_button.clock.getTime());
        } else {
          // update time clicked until;
          esg_familiarity_screen_next_button.timesOff[esg_familiarity_screen_next_button.timesOff.length - 1] = esg_familiarity_screen_next_button.clock.getTime();
        }
        if (!esg_familiarity_screen_next_button.wasClicked) {
          
        }
        // if esg_familiarity_screen_next_button is still clicked next frame, it is not a new click
        esg_familiarity_screen_next_button.wasClicked = true;
      } else {
        // if esg_familiarity_screen_next_button is clicked next frame, it is a new click
        esg_familiarity_screen_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if esg_familiarity_screen_next_button hasn't started / has finished
      esg_familiarity_screen_next_button.clock.reset();
      // if esg_familiarity_screen_next_button is clicked next frame, it is a new click
      esg_familiarity_screen_next_button.wasClicked = false;
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
    for (const thisComponent of esg_familiarity_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function esg_familiarity_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'esg_familiarity_screen' ---
    for (const thisComponent of esg_familiarity_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('esg_familiarity_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('esg_familiarity.response', esg_familiarity.getRating());
    psychoJS.experiment.addData('esg_familiarity.rt', esg_familiarity.getRT());
    psychoJS.experiment.addData('esg_familiarity_screen_next_button.numClicks', esg_familiarity_screen_next_button.numClicks);
    psychoJS.experiment.addData('esg_familiarity_screen_next_button.timesOn', esg_familiarity_screen_next_button.timesOn);
    psychoJS.experiment.addData('esg_familiarity_screen_next_button.timesOff', esg_familiarity_screen_next_button.timesOff);
    // the Routine "esg_familiarity_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gri_familiarity_screenMaxDurationReached;
var gri_familiarity_screen_next_clicked;
var gri_familiarity_screenMaxDuration;
var gri_familiarity_screenComponents;
function gri_familiarity_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gri_familiarity_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    gri_familiarity_screenClock.reset();
    routineTimer.reset();
    gri_familiarity_screenMaxDurationReached = false;
    // update component parameters for each repeat
    gri_familiarity.reset()
    // Run 'Begin Routine' code from gri_familiarity_screen_validation_code
    validation_message = "";
    gri_familiarity_screen_next_clicked = false;
    // reset gri_familiarity_screen_next_button to account for continued clicks & clear times on/off
    gri_familiarity_screen_next_button.reset()
    psychoJS.experiment.addData('gri_familiarity_screen.started', globalClock.getTime());
    gri_familiarity_screenMaxDuration = None
    // keep track of which components have finished
    gri_familiarity_screenComponents = [];
    gri_familiarity_screenComponents.push(gri_familiarity_screen_title);
    gri_familiarity_screenComponents.push(gri_familiarity_question);
    gri_familiarity_screenComponents.push(gri_familiarity);
    gri_familiarity_screenComponents.push(gri_familiarity_screen_validation);
    gri_familiarity_screenComponents.push(gri_familiarity_screen_next_button);
    
    for (const thisComponent of gri_familiarity_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gri_familiarity_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gri_familiarity_screen' ---
    // get current time
    t = gri_familiarity_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gri_familiarity_screen_title* updates
    if (t >= 0.0 && gri_familiarity_screen_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_familiarity_screen_title.tStart = t;  // (not accounting for frame time here)
      gri_familiarity_screen_title.frameNStart = frameN;  // exact frame index
      
      gri_familiarity_screen_title.setAutoDraw(true);
    }
    
    
    // if gri_familiarity_screen_title is active this frame...
    if (gri_familiarity_screen_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_familiarity_question* updates
    if (t >= 0.0 && gri_familiarity_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_familiarity_question.tStart = t;  // (not accounting for frame time here)
      gri_familiarity_question.frameNStart = frameN;  // exact frame index
      
      gri_familiarity_question.setAutoDraw(true);
    }
    
    
    // if gri_familiarity_question is active this frame...
    if (gri_familiarity_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_familiarity* updates
    if (t >= 0.0 && gri_familiarity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_familiarity.tStart = t;  // (not accounting for frame time here)
      gri_familiarity.frameNStart = frameN;  // exact frame index
      
      gri_familiarity.setAutoDraw(true);
    }
    
    
    // if gri_familiarity is active this frame...
    if (gri_familiarity.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gri_familiarity_screen_validation* updates
    if (t >= 0.0 && gri_familiarity_screen_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      gri_familiarity_screen_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      gri_familiarity_screen_validation.tStart = t;  // (not accounting for frame time here)
      gri_familiarity_screen_validation.frameNStart = frameN;  // exact frame index
      
      gri_familiarity_screen_validation.setAutoDraw(true);
    }
    
    
    // if gri_familiarity_screen_validation is active this frame...
    if (gri_familiarity_screen_validation.status === PsychoJS.Status.STARTED) {
      // update params
      gri_familiarity_screen_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from gri_familiarity_screen_validation_code
    if (isButtonClickedResponsive(gri_familiarity_screen_next_button)) {
        if (gri_familiarity.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "回答を選択してください。";
        }
    }
    
    // *gri_familiarity_screen_next_button* updates
    if (t >= 0 && gri_familiarity_screen_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gri_familiarity_screen_next_button.tStart = t;  // (not accounting for frame time here)
      gri_familiarity_screen_next_button.frameNStart = frameN;  // exact frame index
      
      gri_familiarity_screen_next_button.setAutoDraw(true);
    }
    
    
    // if gri_familiarity_screen_next_button is active this frame...
    if (gri_familiarity_screen_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (gri_familiarity_screen_next_button.status === PsychoJS.Status.STARTED) {
      // check whether gri_familiarity_screen_next_button has been pressed
      if (isButtonClickedResponsive(gri_familiarity_screen_next_button)) {
        if (!gri_familiarity_screen_next_button.wasClicked) {
          // store time of first click
          gri_familiarity_screen_next_button.timesOn.push(gri_familiarity_screen_next_button.clock.getTime());
          // store time clicked until
          gri_familiarity_screen_next_button.timesOff.push(gri_familiarity_screen_next_button.clock.getTime());
        } else {
          // update time clicked until;
          gri_familiarity_screen_next_button.timesOff[gri_familiarity_screen_next_button.timesOff.length - 1] = gri_familiarity_screen_next_button.clock.getTime();
        }
        if (!gri_familiarity_screen_next_button.wasClicked) {
          
        }
        // if gri_familiarity_screen_next_button is still clicked next frame, it is not a new click
        gri_familiarity_screen_next_button.wasClicked = true;
      } else {
        // if gri_familiarity_screen_next_button is clicked next frame, it is a new click
        gri_familiarity_screen_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if gri_familiarity_screen_next_button hasn't started / has finished
      gri_familiarity_screen_next_button.clock.reset();
      // if gri_familiarity_screen_next_button is clicked next frame, it is a new click
      gri_familiarity_screen_next_button.wasClicked = false;
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
    for (const thisComponent of gri_familiarity_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gri_familiarity_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gri_familiarity_screen' ---
    for (const thisComponent of gri_familiarity_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('gri_familiarity_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('gri_familiarity.response', gri_familiarity.getRating());
    psychoJS.experiment.addData('gri_familiarity.rt', gri_familiarity.getRT());
    psychoJS.experiment.addData('gri_familiarity_screen_next_button.numClicks', gri_familiarity_screen_next_button.numClicks);
    psychoJS.experiment.addData('gri_familiarity_screen_next_button.timesOn', gri_familiarity_screen_next_button.timesOn);
    psychoJS.experiment.addData('gri_familiarity_screen_next_button.timesOff', gri_familiarity_screen_next_button.timesOff);
    // the Routine "gri_familiarity_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var investment_experienceMaxDurationReached;
var investment_experience_next_clicked;
var investment_experienceMaxDuration;
var investment_experienceComponents;
function investment_experienceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'investment_experience' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    investment_experienceClock.reset();
    routineTimer.reset();
    investment_experienceMaxDurationReached = false;
    // update component parameters for each repeat
    investment_experience_response.reset()
    // Run 'Begin Routine' code from investment_experience_validation_code
    validation_message = "";
    investment_yes = false;
    investment_experience_next_clicked = false;
    // reset investment_experience_next_button to account for continued clicks & clear times on/off
    investment_experience_next_button.reset()
    psychoJS.experiment.addData('investment_experience.started', globalClock.getTime());
    investment_experienceMaxDuration = None
    // keep track of which components have finished
    investment_experienceComponents = [];
    investment_experienceComponents.push(investment_experience_title);
    investment_experienceComponents.push(investment_question);
    investment_experienceComponents.push(investment_experience_response);
    investment_experienceComponents.push(investment_experience_validation);
    investment_experienceComponents.push(investment_experience_next_button);
    
    for (const thisComponent of investment_experienceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function investment_experienceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'investment_experience' ---
    // get current time
    t = investment_experienceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *investment_experience_title* updates
    if (t >= 0.0 && investment_experience_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_experience_title.tStart = t;  // (not accounting for frame time here)
      investment_experience_title.frameNStart = frameN;  // exact frame index
      
      investment_experience_title.setAutoDraw(true);
    }
    
    
    // if investment_experience_title is active this frame...
    if (investment_experience_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_question* updates
    if (t >= 0.0 && investment_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_question.tStart = t;  // (not accounting for frame time here)
      investment_question.frameNStart = frameN;  // exact frame index
      
      investment_question.setAutoDraw(true);
    }
    
    
    // if investment_question is active this frame...
    if (investment_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_experience_response* updates
    if (t >= 0.0 && investment_experience_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_experience_response.tStart = t;  // (not accounting for frame time here)
      investment_experience_response.frameNStart = frameN;  // exact frame index
      
      investment_experience_response.setAutoDraw(true);
    }
    
    
    // if investment_experience_response is active this frame...
    if (investment_experience_response.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_experience_validation* updates
    if (t >= 0.0 && investment_experience_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      investment_experience_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      investment_experience_validation.tStart = t;  // (not accounting for frame time here)
      investment_experience_validation.frameNStart = frameN;  // exact frame index
      
      investment_experience_validation.setAutoDraw(true);
    }
    
    
    // if investment_experience_validation is active this frame...
    if (investment_experience_validation.status === PsychoJS.Status.STARTED) {
      // update params
      investment_experience_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from investment_experience_validation_code
    if (isButtonClickedResponsive(investment_experience_next_button)) {
        let investment_rating = investment_experience_response.getRating();
        if (investment_rating === undefined) {
            validation_message = "投資経験について回答してください。";
        } else {
            investment_yes = ["はい", "1", "0"].includes(String(investment_rating));
            if (!investment_yes) {
                psychoJS.experiment.addData("investment_years", "");
            }
            continueRoutine = false;
        }
    }
    
    // *investment_experience_next_button* updates
    if (t >= 0 && investment_experience_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_experience_next_button.tStart = t;  // (not accounting for frame time here)
      investment_experience_next_button.frameNStart = frameN;  // exact frame index
      
      investment_experience_next_button.setAutoDraw(true);
    }
    
    
    // if investment_experience_next_button is active this frame...
    if (investment_experience_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (investment_experience_next_button.status === PsychoJS.Status.STARTED) {
      // check whether investment_experience_next_button has been pressed
      if (isButtonClickedResponsive(investment_experience_next_button)) {
        if (!investment_experience_next_button.wasClicked) {
          // store time of first click
          investment_experience_next_button.timesOn.push(investment_experience_next_button.clock.getTime());
          // store time clicked until
          investment_experience_next_button.timesOff.push(investment_experience_next_button.clock.getTime());
        } else {
          // update time clicked until;
          investment_experience_next_button.timesOff[investment_experience_next_button.timesOff.length - 1] = investment_experience_next_button.clock.getTime();
        }
        if (!investment_experience_next_button.wasClicked) {
          
        }
        // if investment_experience_next_button is still clicked next frame, it is not a new click
        investment_experience_next_button.wasClicked = true;
      } else {
        // if investment_experience_next_button is clicked next frame, it is a new click
        investment_experience_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if investment_experience_next_button hasn't started / has finished
      investment_experience_next_button.clock.reset();
      // if investment_experience_next_button is clicked next frame, it is a new click
      investment_experience_next_button.wasClicked = false;
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
    for (const thisComponent of investment_experienceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function investment_experienceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'investment_experience' ---
    for (const thisComponent of investment_experienceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('investment_experience.stopped', globalClock.getTime());
    psychoJS.experiment.addData('investment_experience_response.response', investment_experience_response.getRating());
    psychoJS.experiment.addData('investment_experience_response.rt', investment_experience_response.getRT());
    psychoJS.experiment.addData('investment_experience_next_button.numClicks', investment_experience_next_button.numClicks);
    psychoJS.experiment.addData('investment_experience_next_button.timesOn', investment_experience_next_button.timesOn);
    psychoJS.experiment.addData('investment_experience_next_button.timesOff', investment_experience_next_button.timesOff);
    // the Routine "investment_experience" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var investment_yearsMaxDurationReached;
var investment_years_next_clicked;
var investment_yearsMaxDuration;
var investment_yearsComponents;
function investment_yearsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'investment_years' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    investment_yearsClock.reset();
    routineTimer.reset();
    investment_yearsMaxDurationReached = false;
    // update component parameters for each repeat
    investment_years_response.reset()
    // Run 'Begin Routine' code from investment_years_code
    validation_message = "";
    investment_years_next_clicked = false;
    if (!investment_yes) {
        continueRoutine = false;
    }
    // reset investment_years_next_button to account for continued clicks & clear times on/off
    investment_years_next_button.reset()
    psychoJS.experiment.addData('investment_years.started', globalClock.getTime());
    investment_yearsMaxDuration = None
    // keep track of which components have finished
    investment_yearsComponents = [];
    investment_yearsComponents.push(investment_years_title);
    investment_yearsComponents.push(investment_years_question);
    investment_yearsComponents.push(investment_years_response);
    investment_yearsComponents.push(investment_years_validation);
    investment_yearsComponents.push(investment_years_next_button);
    
    for (const thisComponent of investment_yearsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function investment_yearsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'investment_years' ---
    // get current time
    t = investment_yearsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *investment_years_title* updates
    if (t >= 0.0 && investment_years_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_years_title.tStart = t;  // (not accounting for frame time here)
      investment_years_title.frameNStart = frameN;  // exact frame index
      
      investment_years_title.setAutoDraw(true);
    }
    
    
    // if investment_years_title is active this frame...
    if (investment_years_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_years_question* updates
    if (t >= 0.0 && investment_years_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_years_question.tStart = t;  // (not accounting for frame time here)
      investment_years_question.frameNStart = frameN;  // exact frame index
      
      investment_years_question.setAutoDraw(true);
    }
    
    
    // if investment_years_question is active this frame...
    if (investment_years_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_years_response* updates
    if (t >= 0.0 && investment_years_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_years_response.tStart = t;  // (not accounting for frame time here)
      investment_years_response.frameNStart = frameN;  // exact frame index
      
      investment_years_response.setAutoDraw(true);
    }
    
    
    // if investment_years_response is active this frame...
    if (investment_years_response.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *investment_years_validation* updates
    if (t >= 0.0 && investment_years_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      investment_years_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      investment_years_validation.tStart = t;  // (not accounting for frame time here)
      investment_years_validation.frameNStart = frameN;  // exact frame index
      
      investment_years_validation.setAutoDraw(true);
    }
    
    
    // if investment_years_validation is active this frame...
    if (investment_years_validation.status === PsychoJS.Status.STARTED) {
      // update params
      investment_years_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from investment_years_code
    if (isButtonClickedResponsive(investment_years_next_button)) {
        if (investment_years_response.getRating() === undefined) {
            validation_message = "投資経験年数を選択してください。";
        } else {
            psychoJS.experiment.addData("investment_years", investment_years_response.getRating());
            continueRoutine = false;
        }
    }
    
    // *investment_years_next_button* updates
    if (t >= 0 && investment_years_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investment_years_next_button.tStart = t;  // (not accounting for frame time here)
      investment_years_next_button.frameNStart = frameN;  // exact frame index
      
      investment_years_next_button.setAutoDraw(true);
    }
    
    
    // if investment_years_next_button is active this frame...
    if (investment_years_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (investment_years_next_button.status === PsychoJS.Status.STARTED) {
      // check whether investment_years_next_button has been pressed
      if (isButtonClickedResponsive(investment_years_next_button)) {
        if (!investment_years_next_button.wasClicked) {
          // store time of first click
          investment_years_next_button.timesOn.push(investment_years_next_button.clock.getTime());
          // store time clicked until
          investment_years_next_button.timesOff.push(investment_years_next_button.clock.getTime());
        } else {
          // update time clicked until;
          investment_years_next_button.timesOff[investment_years_next_button.timesOff.length - 1] = investment_years_next_button.clock.getTime();
        }
        if (!investment_years_next_button.wasClicked) {
          
        }
        // if investment_years_next_button is still clicked next frame, it is not a new click
        investment_years_next_button.wasClicked = true;
      } else {
        // if investment_years_next_button is clicked next frame, it is a new click
        investment_years_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if investment_years_next_button hasn't started / has finished
      investment_years_next_button.clock.reset();
      // if investment_years_next_button is clicked next frame, it is a new click
      investment_years_next_button.wasClicked = false;
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
    for (const thisComponent of investment_yearsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function investment_yearsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'investment_years' ---
    for (const thisComponent of investment_yearsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('investment_years.stopped', globalClock.getTime());
    psychoJS.experiment.addData('investment_years_response.response', investment_years_response.getRating());
    psychoJS.experiment.addData('investment_years_response.rt', investment_years_response.getRT());
    psychoJS.experiment.addData('investment_years_next_button.numClicks', investment_years_next_button.numClicks);
    psychoJS.experiment.addData('investment_years_next_button.timesOn', investment_years_next_button.timesOn);
    psychoJS.experiment.addData('investment_years_next_button.timesOff', investment_years_next_button.timesOff);
    // the Routine "investment_years" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var finance_educationMaxDurationReached;
var finance_education_next_clicked;
var finance_educationMaxDuration;
var finance_educationComponents;
function finance_educationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finance_education' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    finance_educationClock.reset();
    routineTimer.reset();
    finance_educationMaxDurationReached = false;
    // update component parameters for each repeat
    finance_education_response.reset()
    // Run 'Begin Routine' code from finance_education_validation_code
    validation_message = "";
    finance_education_next_clicked = false;
    // reset finance_education_next_button to account for continued clicks & clear times on/off
    finance_education_next_button.reset()
    psychoJS.experiment.addData('finance_education.started', globalClock.getTime());
    finance_educationMaxDuration = None
    // keep track of which components have finished
    finance_educationComponents = [];
    finance_educationComponents.push(finance_education_title);
    finance_educationComponents.push(finance_question);
    finance_educationComponents.push(finance_education_response);
    finance_educationComponents.push(finance_education_validation);
    finance_educationComponents.push(finance_education_next_button);
    
    for (const thisComponent of finance_educationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finance_educationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finance_education' ---
    // get current time
    t = finance_educationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finance_education_title* updates
    if (t >= 0.0 && finance_education_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finance_education_title.tStart = t;  // (not accounting for frame time here)
      finance_education_title.frameNStart = frameN;  // exact frame index
      
      finance_education_title.setAutoDraw(true);
    }
    
    
    // if finance_education_title is active this frame...
    if (finance_education_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *finance_question* updates
    if (t >= 0.0 && finance_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finance_question.tStart = t;  // (not accounting for frame time here)
      finance_question.frameNStart = frameN;  // exact frame index
      
      finance_question.setAutoDraw(true);
    }
    
    
    // if finance_question is active this frame...
    if (finance_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *finance_education_response* updates
    if (t >= 0.0 && finance_education_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finance_education_response.tStart = t;  // (not accounting for frame time here)
      finance_education_response.frameNStart = frameN;  // exact frame index
      
      finance_education_response.setAutoDraw(true);
    }
    
    
    // if finance_education_response is active this frame...
    if (finance_education_response.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *finance_education_validation* updates
    if (t >= 0.0 && finance_education_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      finance_education_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      finance_education_validation.tStart = t;  // (not accounting for frame time here)
      finance_education_validation.frameNStart = frameN;  // exact frame index
      
      finance_education_validation.setAutoDraw(true);
    }
    
    
    // if finance_education_validation is active this frame...
    if (finance_education_validation.status === PsychoJS.Status.STARTED) {
      // update params
      finance_education_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from finance_education_validation_code
    if (isButtonClickedResponsive(finance_education_next_button)) {
        if (finance_education_response.getRating() !== undefined) {
            continueRoutine = false;
        } else {
            validation_message = "学習経験について回答してください。";
        }
    }
    
    // *finance_education_next_button* updates
    if (t >= 0 && finance_education_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finance_education_next_button.tStart = t;  // (not accounting for frame time here)
      finance_education_next_button.frameNStart = frameN;  // exact frame index
      
      finance_education_next_button.setAutoDraw(true);
    }
    
    
    // if finance_education_next_button is active this frame...
    if (finance_education_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (finance_education_next_button.status === PsychoJS.Status.STARTED) {
      // check whether finance_education_next_button has been pressed
      if (isButtonClickedResponsive(finance_education_next_button)) {
        if (!finance_education_next_button.wasClicked) {
          // store time of first click
          finance_education_next_button.timesOn.push(finance_education_next_button.clock.getTime());
          // store time clicked until
          finance_education_next_button.timesOff.push(finance_education_next_button.clock.getTime());
        } else {
          // update time clicked until;
          finance_education_next_button.timesOff[finance_education_next_button.timesOff.length - 1] = finance_education_next_button.clock.getTime();
        }
        if (!finance_education_next_button.wasClicked) {
          
        }
        // if finance_education_next_button is still clicked next frame, it is not a new click
        finance_education_next_button.wasClicked = true;
      } else {
        // if finance_education_next_button is clicked next frame, it is a new click
        finance_education_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if finance_education_next_button hasn't started / has finished
      finance_education_next_button.clock.reset();
      // if finance_education_next_button is clicked next frame, it is a new click
      finance_education_next_button.wasClicked = false;
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
    for (const thisComponent of finance_educationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finance_educationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finance_education' ---
    for (const thisComponent of finance_educationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('finance_education.stopped', globalClock.getTime());
    psychoJS.experiment.addData('finance_education_response.response', finance_education_response.getRating());
    psychoJS.experiment.addData('finance_education_response.rt', finance_education_response.getRT());
    psychoJS.experiment.addData('finance_education_next_button.numClicks', finance_education_next_button.numClicks);
    psychoJS.experiment.addData('finance_education_next_button.timesOn', finance_education_next_button.timesOn);
    psychoJS.experiment.addData('finance_education_next_button.timesOff', finance_education_next_button.timesOff);
    // the Routine "finance_education" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographics_1MaxDurationReached;
var demographics_1_next_clicked;
var age_text;
var age_text_normalized;
var normalize_age_text;
var age_text_is_valid;
var age_group_from_text;
var demographics_1MaxDuration;
var demographics_1Components;
function demographics_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    demographics_1Clock.reset();
    routineTimer.reset();
    demographics_1MaxDurationReached = false;
    // update component parameters for each repeat
    gender.reset()
    // Run 'Begin Routine' code from demographics_1_validation_code
    validation_message = "";
    demographics_1_next_clicked = false;
    // Run 'Begin Routine' code from age_input_code
    validation_message = "";
    demographics_1_next_clicked = false;
    age_text = "";
    age_text_normalized = "";
    const ageOptions = ["10-19歳", "20-29歳", "30-39歳", "40-49歳", "50-59歳", "60-69歳", "70歳以上"];
    normalize_age_text = function(rawText) {
        return String((rawText === undefined || rawText === null) ? "" : rawText).normalize("NFKC").trim();
    };
    age_text_is_valid = function(rawText) {
        return ageOptions.includes(normalize_age_text(rawText));
    };
    age_group_from_text = function(rawText) {
        return normalize_age_text(rawText);
    };
    // reset demographics_1_next_button to account for continued clicks & clear times on/off
    age_textbox.reset()
    demographics_1_next_button.reset()
    psychoJS.experiment.addData('demographics_1.started', globalClock.getTime());
    demographics_1MaxDuration = None
    // keep track of which components have finished
    demographics_1Components = [];
    demographics_1Components.push(demographics_1_title);
    demographics_1Components.push(age_question);
    demographics_1Components.push(age_input_box);
    demographics_1Components.push(age_textbox);
    demographics_1Components.push(age_input_display);
    demographics_1Components.push(age_suffix);
    demographics_1Components.push(age_hint);
    demographics_1Components.push(gender_question);
    demographics_1Components.push(gender);
    demographics_1Components.push(demographics_1_validation);
    demographics_1Components.push(demographics_1_next_button);
    
    for (const thisComponent of demographics_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demographics_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics_1' ---
    // get current time
    t = demographics_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demographics_1_title* updates
    if (t >= 0.0 && demographics_1_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_1_title.tStart = t;  // (not accounting for frame time here)
      demographics_1_title.frameNStart = frameN;  // exact frame index
      
      demographics_1_title.setAutoDraw(true);
    }
    
    
    // if demographics_1_title is active this frame...
    if (demographics_1_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *age_question* updates
    if (t >= 0.0 && age_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_question.tStart = t;  // (not accounting for frame time here)
      age_question.frameNStart = frameN;  // exact frame index
      
      age_question.setAutoDraw(true);
    }
    
    
    // if age_question is active this frame...
    if (age_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *age_input_box* updates
    if (t >= 0.0 && age_input_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_input_box.tStart = t;  // (not accounting for frame time here)
      age_input_box.frameNStart = frameN;  // exact frame index
      
      age_input_box.setAutoDraw(true);
    }
    
    
    // if age_input_box is active this frame...
    if (age_input_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *age_textbox* updates
    if (t >= 0.0 && age_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_textbox.tStart = t;  // (not accounting for frame time here)
      age_textbox.frameNStart = frameN;  // exact frame index
      
      age_textbox.setAutoDraw(true);
    }
    
    
    // if age_textbox is active this frame...
    if (age_textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *age_input_display* updates
    if (t >= 0.0 && age_input_display.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      age_input_display.setText(age_text, false);
      // keep track of start time/frame for later
      age_input_display.tStart = t;  // (not accounting for frame time here)
      age_input_display.frameNStart = frameN;  // exact frame index
      
      age_input_display.setAutoDraw(true);
    }
    
    
    // if age_input_display is active this frame...
    if (age_input_display.status === PsychoJS.Status.STARTED) {
      // update params
      age_input_display.setText(age_text, false);
    }
    
    
    // *age_suffix* updates
    if (t >= 0.0 && age_suffix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_suffix.tStart = t;  // (not accounting for frame time here)
      age_suffix.frameNStart = frameN;  // exact frame index
      
      age_suffix.setAutoDraw(true);
    }
    
    
    // if age_suffix is active this frame...
    if (age_suffix.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *age_hint* updates
    if (t >= 0.0 && age_hint.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_hint.tStart = t;  // (not accounting for frame time here)
      age_hint.frameNStart = frameN;  // exact frame index
      
      age_hint.setAutoDraw(true);
    }
    
    
    // if age_hint is active this frame...
    if (age_hint.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gender_question* updates
    if (t >= 0.0 && gender_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_question.tStart = t;  // (not accounting for frame time here)
      gender_question.frameNStart = frameN;  // exact frame index
      
      gender_question.setAutoDraw(true);
    }
    
    
    // if gender_question is active this frame...
    if (gender_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *gender* updates
    if (t >= 0.0 && gender.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender.tStart = t;  // (not accounting for frame time here)
      gender.frameNStart = frameN;  // exact frame index
      
      gender.setAutoDraw(true);
    }
    
    
    // if gender is active this frame...
    if (gender.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *demographics_1_validation* updates
    if (t >= 0.0 && demographics_1_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      demographics_1_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      demographics_1_validation.tStart = t;  // (not accounting for frame time here)
      demographics_1_validation.frameNStart = frameN;  // exact frame index
      
      demographics_1_validation.setAutoDraw(true);
    }
    
    
    // if demographics_1_validation is active this frame...
    if (demographics_1_validation.status === PsychoJS.Status.STARTED) {
      // update params
      demographics_1_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from age_input_code
    age_text = (age_textbox.getRating() === undefined) ? "" : String(age_textbox.getRating());
    age_text_normalized = normalize_age_text(age_text);
    if (isButtonClickedResponsive(demographics_1_next_button)) {
        let age_normalized = normalize_age_text(age_text);
        if (!age_text_is_valid(age_normalized)) {
            validation_message = "年齢を選択してください。";
        } else if (gender.getRating() === undefined) {
            validation_message = "性別を選択してください。";
        } else {
            psychoJS.experiment.addData("age_group", age_group_from_text(age_normalized));
            continueRoutine = false;
        }
    }
    
    // *demographics_1_next_button* updates
    if (t >= 0 && demographics_1_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_1_next_button.tStart = t;  // (not accounting for frame time here)
      demographics_1_next_button.frameNStart = frameN;  // exact frame index
      
      demographics_1_next_button.setAutoDraw(true);
    }
    
    
    // if demographics_1_next_button is active this frame...
    if (demographics_1_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (demographics_1_next_button.status === PsychoJS.Status.STARTED) {
      // check whether demographics_1_next_button has been pressed
      if (isButtonClickedResponsive(demographics_1_next_button)) {
        if (!demographics_1_next_button.wasClicked) {
          // store time of first click
          demographics_1_next_button.timesOn.push(demographics_1_next_button.clock.getTime());
          // store time clicked until
          demographics_1_next_button.timesOff.push(demographics_1_next_button.clock.getTime());
        } else {
          // update time clicked until;
          demographics_1_next_button.timesOff[demographics_1_next_button.timesOff.length - 1] = demographics_1_next_button.clock.getTime();
        }
        if (!demographics_1_next_button.wasClicked) {
          
        }
        // if demographics_1_next_button is still clicked next frame, it is not a new click
        demographics_1_next_button.wasClicked = true;
      } else {
        // if demographics_1_next_button is clicked next frame, it is a new click
        demographics_1_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if demographics_1_next_button hasn't started / has finished
      demographics_1_next_button.clock.reset();
      // if demographics_1_next_button is clicked next frame, it is a new click
      demographics_1_next_button.wasClicked = false;
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
    for (const thisComponent of demographics_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographics_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics_1' ---
    for (const thisComponent of demographics_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demographics_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('gender.response', gender.getRating());
    psychoJS.experiment.addData('gender.rt', gender.getRT());
    // Run 'End Routine' code from age_input_code
    let age_raw_text = age_text.trim();
    let age_normalized = normalize_age_text(age_raw_text);
    psychoJS.experiment.addData("age_raw_text", age_raw_text);
    psychoJS.experiment.addData("age", age_normalized);
    if (age_text_is_valid(age_normalized)) {
        psychoJS.experiment.addData("age_group", age_group_from_text(age_normalized));
    } else {
        psychoJS.experiment.addData("age_group", "");
    }
    psychoJS.experiment.addData('demographics_1_next_button.numClicks', demographics_1_next_button.numClicks);
    psychoJS.experiment.addData('demographics_1_next_button.timesOn', demographics_1_next_button.timesOn);
    psychoJS.experiment.addData('demographics_1_next_button.timesOff', demographics_1_next_button.timesOff);
    // the Routine "demographics_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographics_2MaxDurationReached;
var demographics_2_next_clicked;
var occupation_other_visible;
var occupation_options;
var demographics_2MaxDuration;
var demographics_2Components;
function demographics_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    demographics_2Clock.reset();
    routineTimer.reset();
    demographics_2MaxDurationReached = false;
    // update component parameters for each repeat
    occupation_attribute.reset()
    occupation_other_textbox.setText('');
    occupation_other_textbox.refresh();
    // Run 'Begin Routine' code from demographics_2_validation_code
    validation_message = "";
    demographics_2_next_clicked = false;
    occupation_other_visible = false;
    occupation_options = ["会社員", "公務員", "教員", "自営業・自由業", "パート・アルバイト", "専業主婦・主夫", "学生", "無職", "その他"];
    function getOccupationTextFromRating(rating) {
        if (rating === undefined) {
            return "";
        }
        let ratingText = String(rating);
        let ratingIndex = Number.parseInt(ratingText, 10) - 1;
        if ((!Number.isNaN(ratingIndex)) && ratingIndex >= 0 && ratingIndex < occupation_options.length) {
            return occupation_options[ratingIndex];
        }
        return ratingText;
    }
    function getTextboxText(box) {
        if (box && box.text !== undefined) {
            return String(box.text).trim();
        }
        if (box && typeof box.getText === "function") {
            return String(box.getText()).trim();
        }
        return "";
    }
    function setOptionalOpacity(component, opacity) {
        if (component && typeof component.setOpacity === "function") {
            component.setOpacity(opacity);
        } else if (component) {
            component.opacity = opacity;
        }
    }
    // reset demographics_2_next_button to account for continued clicks & clear times on/off
    demographics_2_next_button.reset()
    psychoJS.experiment.addData('demographics_2.started', globalClock.getTime());
    demographics_2MaxDuration = None
    // keep track of which components have finished
    demographics_2Components = [];
    demographics_2Components.push(demographics_2_title);
    demographics_2Components.push(status_question);
    demographics_2Components.push(occupation_attribute);
    demographics_2Components.push(occupation_other_question);
    demographics_2Components.push(occupation_other_textbox);
    demographics_2Components.push(demographics_2_validation);
    demographics_2Components.push(demographics_2_next_button);
    
    for (const thisComponent of demographics_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var occupation_text;
function demographics_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demographics_2' ---
    // get current time
    t = demographics_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *demographics_2_title* updates
    if (t >= 0.0 && demographics_2_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_2_title.tStart = t;  // (not accounting for frame time here)
      demographics_2_title.frameNStart = frameN;  // exact frame index
      
      demographics_2_title.setAutoDraw(true);
    }
    
    
    // if demographics_2_title is active this frame...
    if (demographics_2_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *status_question* updates
    if (t >= 0.0 && status_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      status_question.tStart = t;  // (not accounting for frame time here)
      status_question.frameNStart = frameN;  // exact frame index
      
      status_question.setAutoDraw(true);
    }
    
    
    // if status_question is active this frame...
    if (status_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *occupation_attribute* updates
    if (t >= 0.0 && occupation_attribute.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_attribute.tStart = t;  // (not accounting for frame time here)
      occupation_attribute.frameNStart = frameN;  // exact frame index
      
      occupation_attribute.setAutoDraw(true);
    }
    
    
    // if occupation_attribute is active this frame...
    if (occupation_attribute.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *occupation_other_question* updates
    if (t >= 0.0 && occupation_other_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_other_question.tStart = t;  // (not accounting for frame time here)
      occupation_other_question.frameNStart = frameN;  // exact frame index
      
      occupation_other_question.setAutoDraw(true);
    }
    
    
    // if occupation_other_question is active this frame...
    if (occupation_other_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *occupation_other_textbox* updates
    if (t >= 0.0 && occupation_other_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      occupation_other_textbox.tStart = t;  // (not accounting for frame time here)
      occupation_other_textbox.frameNStart = frameN;  // exact frame index
      
      occupation_other_textbox.setAutoDraw(true);
    }
    
    
    // if occupation_other_textbox is active this frame...
    if (occupation_other_textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *demographics_2_validation* updates
    if (t >= 0.0 && demographics_2_validation.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      demographics_2_validation.setText(validation_message, false);
      // keep track of start time/frame for later
      demographics_2_validation.tStart = t;  // (not accounting for frame time here)
      demographics_2_validation.frameNStart = frameN;  // exact frame index
      
      demographics_2_validation.setAutoDraw(true);
    }
    
    
    // if demographics_2_validation is active this frame...
    if (demographics_2_validation.status === PsychoJS.Status.STARTED) {
      // update params
      demographics_2_validation.setText(validation_message, false);
    }
    
    // Run 'Each Frame' code from demographics_2_validation_code
    let occupation_rating = occupation_attribute.getRating();
    occupation_text = getOccupationTextFromRating(occupation_rating);
    occupation_other_visible = (occupation_text === "その他");
    setOptionalOpacity(occupation_other_question, occupation_other_visible ? 1.0 : 0.0);
    setOptionalOpacity(occupation_other_textbox, occupation_other_visible ? 1.0 : 0.0);
    if (isButtonClickedResponsive(demographics_2_next_button)) {
        let occupation_other_text = getTextboxText(occupation_other_textbox);
        if (occupation_rating === undefined) {
            validation_message = "職業・属性を選択してください。";
        } else if (occupation_other_visible && !occupation_other_text) {
            validation_message = "「その他」を選択した場合は、具体的に入力してください。";
        } else {
            psychoJS.experiment.addData("occupation_attribute", occupation_text);
            psychoJS.experiment.addData("occupation_other_text", occupation_other_visible ? occupation_other_text : "");
            continueRoutine = false;
        }
    }
    
    // *demographics_2_next_button* updates
    if (t >= 0 && demographics_2_next_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_2_next_button.tStart = t;  // (not accounting for frame time here)
      demographics_2_next_button.frameNStart = frameN;  // exact frame index
      
      demographics_2_next_button.setAutoDraw(true);
    }
    
    
    // if demographics_2_next_button is active this frame...
    if (demographics_2_next_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (demographics_2_next_button.status === PsychoJS.Status.STARTED) {
      // check whether demographics_2_next_button has been pressed
      if (isButtonClickedResponsive(demographics_2_next_button)) {
        if (!demographics_2_next_button.wasClicked) {
          // store time of first click
          demographics_2_next_button.timesOn.push(demographics_2_next_button.clock.getTime());
          // store time clicked until
          demographics_2_next_button.timesOff.push(demographics_2_next_button.clock.getTime());
        } else {
          // update time clicked until;
          demographics_2_next_button.timesOff[demographics_2_next_button.timesOff.length - 1] = demographics_2_next_button.clock.getTime();
        }
        if (!demographics_2_next_button.wasClicked) {
          
        }
        // if demographics_2_next_button is still clicked next frame, it is not a new click
        demographics_2_next_button.wasClicked = true;
      } else {
        // if demographics_2_next_button is clicked next frame, it is a new click
        demographics_2_next_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if demographics_2_next_button hasn't started / has finished
      demographics_2_next_button.clock.reset();
      // if demographics_2_next_button is clicked next frame, it is a new click
      demographics_2_next_button.wasClicked = false;
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
    for (const thisComponent of demographics_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographics_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics_2' ---
    for (const thisComponent of demographics_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demographics_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('occupation_attribute.response', occupation_attribute.getRating());
    psychoJS.experiment.addData('occupation_attribute.rt', occupation_attribute.getRT());
    psychoJS.experiment.addData('occupation_other_textbox.text',occupation_other_textbox.text)
    psychoJS.experiment.addData('demographics_2_next_button.numClicks', demographics_2_next_button.numClicks);
    psychoJS.experiment.addData('demographics_2_next_button.timesOn', demographics_2_next_button.timesOn);
    psychoJS.experiment.addData('demographics_2_next_button.timesOff', demographics_2_next_button.timesOff);
    // the Routine "demographics_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    // reset finish_button to account for continued clicks & clear times on/off
    finish_button.reset()
    dataUploadStarted = false;
    dataUploadFinished = false;
    dataUploadSucceeded = false;
    dataUploadError = "";
    dataUploadResult = undefined;
    dataUploadPromise = undefined;
    safeSetText(end_title, "データ送信中");
    safeSetText(end_message, "回答データを送信しています。\nこの画面を閉じずにお待ちください。");
    safeSetText(finish_button, "終了");
    setOptionalOpacity(finish_button, 0.0);
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = None
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_title);
    endComponents.push(end_message);
    endComponents.push(finish_button);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    startDataUploadIfNeeded();
    updateEndUploadDisplay();
    
    // *end_title* updates
    if (t >= 0.0 && end_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_title.tStart = t;  // (not accounting for frame time here)
      end_title.frameNStart = frameN;  // exact frame index
      
      end_title.setAutoDraw(true);
    }
    
    
    // if end_title is active this frame...
    if (end_title.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *end_message* updates
    if (t >= 0.0 && end_message.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_message.tStart = t;  // (not accounting for frame time here)
      end_message.frameNStart = frameN;  // exact frame index
      
      end_message.setAutoDraw(true);
    }
    
    
    // if end_message is active this frame...
    if (end_message.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *finish_button* updates
    if (t >= 0 && finish_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_button.tStart = t;  // (not accounting for frame time here)
      finish_button.frameNStart = frameN;  // exact frame index
      
      finish_button.setAutoDraw(true);
    }
    
    
    // if finish_button is active this frame...
    if (finish_button.status === PsychoJS.Status.STARTED) {
    }
    
    if (finish_button.status === PsychoJS.Status.STARTED) {
      // check whether finish_button has been pressed
      if (isButtonClickedResponsive(finish_button)) {
        if (!finish_button.wasClicked) {
          // store time of first click
          finish_button.timesOn.push(finish_button.clock.getTime());
          // store time clicked until
          finish_button.timesOff.push(finish_button.clock.getTime());
        } else {
          // update time clicked until;
          finish_button.timesOff[finish_button.timesOff.length - 1] = finish_button.clock.getTime();
        }
        if (!finish_button.wasClicked) {
          if (dataUploadFinished && dataUploadSucceeded) {
            // end routine only after the TEST data upload has succeeded
            continueRoutine = false;
          } else if (dataUploadFinished && !dataUploadSucceeded) {
            retryDataUpload();
          }
          
        }
        // if finish_button is still clicked next frame, it is not a new click
        finish_button.wasClicked = true;
      } else {
        // if finish_button is clicked next frame, it is a new click
        finish_button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if finish_button hasn't started / has finished
      finish_button.clock.reset();
      // if finish_button is clicked next frame, it is a new click
      finish_button.wasClicked = false;
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
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    psychoJS.experiment.addData('finish_button.numClicks', finish_button.numClicks);
    psychoJS.experiment.addData('finish_button.timesOn', finish_button.timesOn);
    psychoJS.experiment.addData('finish_button.timesOff', finish_button.timesOff);
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
