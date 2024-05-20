
interface [FTName | capitalize&capitalcase&replace(' ', '')]Action {   
}

interface [FTName | capitalize&capitalcase&replace(' ', '')]State {
}

type I[FTName | capitalize&capitalcase&replace(' ', '')] = BaseZustandAction<[FTName | capitalize&capitalcase&replace(' ', '')]Action> & BaseZustandState<[FTName | capitalize&capitalcase&replace(' ', '')]State>

