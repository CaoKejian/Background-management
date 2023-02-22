
interface Today {
  confirm: number;
  suspect?: any;
  heal: number;
  dead: number;
  severe?: any;
  storeConfirm: number;
  input: number;
}

interface Total {
  confirm: number;
  suspect: number;
  heal: number;
  dead: number;
  severe: number;
  input: number;
}

interface ExtData {
  noSymptom: number;
  incrNoSymptom: number;
}

interface ChinaTotal {
  today: Today;
  total: Total;
  extData: ExtData;
}

interface Today {
  confirm: number;
  suspect: number;
  heal: number;
  dead: number;
  severe: number;
  storeConfirm?: any;
}

interface Total {
  confirm: number;
  suspect: number;
  heal: number;
  dead: number;
  severe: number;
  input: number;
}

interface ChinaDayList {
  date: string;
  today: Today;
  total: Total;
  extData?: any;
  lastUpdateTime?: any;
}

interface Today {
  confirm: number;
  suspect?: any;
  heal: number;
  dead: number;
  severe?: any;
  storeConfirm?: any;
}

interface Total {
  confirm: number;
  suspect?: number;
  heal: number;
  dead: number;
  severe?: number;
  input: number;
}

interface ExtData { }

interface AreaTree {
  today: Today;
  total: Total;
  extData: ExtData;
  name: string;
  id: string;
  lastUpdateTime: string;
  children: any[];
}

interface RootObject {
  chinaTotal: ChinaTotal;
  chinaDayList: ChinaDayList[];
  lastUpdateTime: string;
  overseaLastUpdateTime: string;
  areaTree: AreaTree[];
}