
const CONFIG = {
    WIDTH: 800,
    HEIGHT: 1334,
    
    IDLE : 0,
    WAITING : 1,
    GROWING : 2,
    WALKING : 3,

    GAME_LIVE_MAX :3,
    LEVEL_EASY : 1,
    LEVEL_MEDIUM : 2,
    LEVEL_HARD : 3,
    LEVEL_VERY_HARD : 4,
    LEVEL_EXTRA_HARD : 5,
    LEVEL_EASY_SCORE_THESHOLD : 0,
    LEVEL_MEDIUM_SCORE_THESHOLD : 20,
    LEVEL_HARD_SCORE_THESHOLD : 50,
    LEVEL_VERY_HARD_SCORE_THESHOLD : 100,
    LEVEL_EXTRA_HARD_SCORE_THESHOLD : 150,
    localStorageBestGameLevelName : "stick_hero_best_game_level",
    localStorageLastScoreName : "stick_hero_last_score",
    localStorageBestScoreName : "stick_hero_best_score",
    localStorageGameLevelName : "stick_hero_game_level",
    localStorageGameLiveCounterName : "stick_hero_best_game_live",

    growTimeEasy : 900,
    platformGapRangeEasy : [200, 400],
    platformWidthRangeEasy : [150, 200],

    growTimeMedium : 800,
    platformGapRangeMedium : [200, 400],
    platformWidthRangeMedium : [100, 150],

    growTimeHard : 700,
    platformGapRangeHard : [150, 450],
    platformWidthRangeHard : [50, 150],

    growTimeVeryHard : 600,
    platformGapRangeVeryHard : [100, 500],
    platformWidthRangeVeryHard : [50, 100],

    growTimeExtraHard : 450,
    platformGapRangeExtraHard : [100, 500],
    platformWidthRangeExtraHard : [25, 80],

    platformHeight: 600,
    playerWidth: 32,
    playerHeight: 64,
    poleWidth: 8,
    rotateTime: 500,
    walkTime: 3,
    fallTime: 500,
    scrollTime: 250,

}

export default CONFIG

