// Chapter 5 - Before Class Fight Load
function C001_BeforeClass_Fight_Load() {
	LoadFight("FightOutro", "Hard", -6, Icons.Fight.Punch);
}

// Chapter 5 - Before Class Fight Run
function C001_BeforeClass_Fight_Run() {
	RenderFight();
}

// Chapter 5 - Before Class Fight Click
function C001_BeforeClass_Fight_Click() {
	FightClick();
}

// Chapter 5 - Before Class Fight Key Down
function C001_BeforeClass_Fight_KeyDown() {
	FightKeyDown();
}

// Chapter 5 - Before Class Fight End
function C001_BeforeClass_Fight_FightEnd(Victory) {
	if (Victory) C001_BeforeClass_FightOutro_FightResult = 1;
	else C001_BeforeClass_FightOutro_FightResult = 2;
}