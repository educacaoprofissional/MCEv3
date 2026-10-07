export type ComputerStatus = 'online' | 'offline' | 'warning' | 'idle';

export interface Computer {
  id: string;
  name: string;
  room: string;
  ip: string;
  user: string | null;
  status: ComputerStatus;
  missingKeys: string[];
  working: boolean;
  cpu: number;
  ram: number;
  ramTotal: number;
  disk: number;
  uptime: string;
  os: string;
  lastSeen: string;
  alerts: string[];
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
}

export const rooms: Room[] = [
  { id: 'all', name: 'Todos os Labs', capacity: 0 },
  { id: 'lab-a', name: 'Laboratório A', capacity: 20 },
  { id: 'lab-b', name: 'Laboratório B', capacity: 24 },
  { id: 'lab-c', name: 'Laboratório C', capacity: 18 },
  { id: 'biblioteca', name: 'Biblioteca', capacity: 10 },
];

export const computers: Computer[] = [
  // Lab A
  { id: 'la-01', name: 'LA-01', room: 'lab-a', ip: '192.168.1.101', user: 'Ana Silva', status: 'online', missingKeys: [], working: true, cpu: 34, ram: 4.2, ramTotal: 8, disk: 72, uptime: '3h 42m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'la-02', name: 'LA-02', room: 'lab-a', ip: '192.168.1.102', user: 'Pedro Costa', status: 'warning', missingKeys: ['Enter', 'Backspace'], working: true, cpu: 91, ram: 7.6, ramTotal: 8, disk: 85, uptime: '5h 10m', os: 'Win 11', lastSeen: 'agora', alerts: ['CPU alta: 91%', 'Disco crítico: 85%'] },
  { id: 'la-03', name: 'LA-03', room: 'lab-a', ip: '192.168.1.103', user: null, status: 'idle', missingKeys: [], working: true, cpu: 2, ram: 1.1, ramTotal: 8, disk: 41, uptime: '6h 00m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'la-04', name: 'LA-04', room: 'lab-a', ip: '192.168.1.104', user: 'Carlos Mend.', status: 'online', missingKeys: ['F5', 'Delete'], working: true, cpu: 55, ram: 5.8, ramTotal: 8, disk: 60, uptime: '2h 18m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'la-05', name: 'LA-05', room: 'lab-a', ip: '192.168.1.105', user: null, status: 'offline', missingKeys: [], working: false, cpu: 0, ram: 0, ramTotal: 8, disk: 0, uptime: '—', os: 'Win 11', lastSeen: '14m atrás', alerts: ['Computador desligado'] },
  { id: 'la-06', name: 'LA-06', room: 'lab-a', ip: '192.168.1.106', user: 'Julia Ramos', status: 'online', missingKeys: [], working: true, cpu: 22, ram: 3.4, ramTotal: 8, disk: 55, uptime: '1h 30m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'la-07', name: 'LA-07', room: 'lab-a', ip: '192.168.1.107', user: 'Lucas Ferr.', status: 'online', missingKeys: ['Caps Lock'], working: true, cpu: 47, ram: 6.1, ramTotal: 8, disk: 48, uptime: '4h 05m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'la-08', name: 'LA-08', room: 'lab-a', ip: '192.168.1.108', user: null, status: 'idle', missingKeys: [], working: true, cpu: 1, ram: 0.9, ramTotal: 8, disk: 33, uptime: '7h 22m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'la-09', name: 'LA-09', room: 'lab-a', ip: '192.168.1.109', user: 'Mariana O.', status: 'warning', missingKeys: ['Tab', 'Shift Dir.', 'Alt'], working: false, cpu: 78, ram: 7.9, ramTotal: 8, disk: 79, uptime: '2h 44m', os: 'Win 11', lastSeen: 'agora', alerts: ['RAM crítica: 98%', 'Teclado com defeito'] },
  { id: 'la-10', name: 'LA-10', room: 'lab-a', ip: '192.168.1.110', user: 'Felipe T.', status: 'online', missingKeys: [], working: true, cpu: 38, ram: 4.8, ramTotal: 8, disk: 62, uptime: '3h 11m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  // Lab B
  { id: 'lb-01', name: 'LB-01', room: 'lab-b', ip: '192.168.2.101', user: 'Sofia Lima', status: 'online', missingKeys: [], working: true, cpu: 29, ram: 3.7, ramTotal: 16, disk: 38, uptime: '2h 00m', os: 'Ubuntu 22', lastSeen: 'agora', alerts: [] },
  { id: 'lb-02', name: 'LB-02', room: 'lab-b', ip: '192.168.2.102', user: 'Bruno Alv.', status: 'online', missingKeys: ['Num Lock', 'Pause'], working: true, cpu: 61, ram: 8.2, ramTotal: 16, disk: 54, uptime: '1h 48m', os: 'Ubuntu 22', lastSeen: 'agora', alerts: [] },
  { id: 'lb-03', name: 'LB-03', room: 'lab-b', ip: '192.168.2.103', user: null, status: 'offline', missingKeys: [], working: false, cpu: 0, ram: 0, ramTotal: 16, disk: 0, uptime: '—', os: 'Ubuntu 22', lastSeen: '2h atrás', alerts: ['Sem resposta por 2h'] },
  { id: 'lb-04', name: 'LB-04', room: 'lab-b', ip: '192.168.2.104', user: 'Tiago Nunes', status: 'online', missingKeys: [], working: true, cpu: 44, ram: 5.5, ramTotal: 16, disk: 67, uptime: '5h 30m', os: 'Ubuntu 22', lastSeen: 'agora', alerts: [] },
  { id: 'lb-05', name: 'LB-05', room: 'lab-b', ip: '192.168.2.105', user: 'Camila R.', status: 'warning', missingKeys: ['Esc', 'F1', 'F2', 'Ctrl Esq.'], working: false, cpu: 88, ram: 14.1, ramTotal: 16, disk: 91, uptime: '3h 00m', os: 'Ubuntu 22', lastSeen: 'agora', alerts: ['Disco crítico: 91%', 'CPU alta: 88%', 'Teclado com defeito'] },
  { id: 'lb-06', name: 'LB-06', room: 'lab-b', ip: '192.168.2.106', user: 'Daniel P.', status: 'online', missingKeys: [], working: true, cpu: 19, ram: 4.0, ramTotal: 16, disk: 42, uptime: '0h 55m', os: 'Ubuntu 22', lastSeen: 'agora', alerts: [] },
  { id: 'lb-07', name: 'LB-07', room: 'lab-b', ip: '192.168.2.107', user: null, status: 'idle', missingKeys: ['Space'], working: true, cpu: 3, ram: 1.2, ramTotal: 16, disk: 28, uptime: '8h 10m', os: 'Ubuntu 22', lastSeen: 'agora', alerts: [] },
  { id: 'lb-08', name: 'LB-08', room: 'lab-b', ip: '192.168.2.108', user: 'Renata B.', status: 'online', missingKeys: [], working: true, cpu: 52, ram: 6.3, ramTotal: 16, disk: 55, uptime: '1h 22m', os: 'Ubuntu 22', lastSeen: 'agora', alerts: [] },
  // Lab C
  { id: 'lc-01', name: 'LC-01', room: 'lab-c', ip: '192.168.3.101', user: 'Gustavo F.', status: 'online', missingKeys: [], working: true, cpu: 41, ram: 3.9, ramTotal: 8, disk: 44, uptime: '2h 30m', os: 'Win 10', lastSeen: 'agora', alerts: [] },
  { id: 'lc-02', name: 'LC-02', room: 'lab-c', ip: '192.168.3.102', user: null, status: 'offline', missingKeys: [], working: false, cpu: 0, ram: 0, ramTotal: 8, disk: 0, uptime: '—', os: 'Win 10', lastSeen: '45m atrás', alerts: ['Computador desligado'] },
  { id: 'lc-03', name: 'LC-03', room: 'lab-c', ip: '192.168.3.103', user: 'Amanda S.', status: 'online', missingKeys: ['Insert', 'Print Screen'], working: true, cpu: 27, ram: 2.8, ramTotal: 8, disk: 31, uptime: '3h 50m', os: 'Win 10', lastSeen: 'agora', alerts: [] },
  { id: 'lc-04', name: 'LC-04', room: 'lab-c', ip: '192.168.3.104', user: 'Roberto C.', status: 'warning', missingKeys: ['Home', 'End', 'Page Up'], working: false, cpu: 83, ram: 7.4, ramTotal: 8, disk: 77, uptime: '4h 15m', os: 'Win 10', lastSeen: 'agora', alerts: ['CPU alta: 83%', 'Teclado com defeito'] },
  { id: 'lc-05', name: 'LC-05', room: 'lab-c', ip: '192.168.3.105', user: 'Isabela M.', status: 'online', missingKeys: [], working: true, cpu: 33, ram: 4.1, ramTotal: 8, disk: 58, uptime: '1h 05m', os: 'Win 10', lastSeen: 'agora', alerts: [] },
  // Biblioteca
  { id: 'bib-01', name: 'BIB-01', room: 'biblioteca', ip: '192.168.4.101', user: 'Marcos A.', status: 'online', missingKeys: [], working: true, cpu: 15, ram: 2.2, ramTotal: 4, disk: 40, uptime: '1h 00m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'bib-02', name: 'BIB-02', room: 'biblioteca', ip: '192.168.4.102', user: null, status: 'idle', missingKeys: ['Win'], working: true, cpu: 1, ram: 0.8, ramTotal: 4, disk: 36, uptime: '6h 30m', os: 'Win 11', lastSeen: 'agora', alerts: [] },
  { id: 'bib-03', name: 'BIB-03', room: 'biblioteca', ip: '192.168.4.103', user: null, status: 'offline', missingKeys: [], working: false, cpu: 0, ram: 0, ramTotal: 4, disk: 0, uptime: '—', os: 'Win 11', lastSeen: '3h atrás', alerts: ['Computador desligado'] },
];
