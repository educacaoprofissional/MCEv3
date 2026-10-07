export const STATS = {
  total: 296,
  working: 191,
  defective: 25,
  missingKeys: 168,
  tecnico: { total: 156, working: 143, defective: 13, missingKeys: 125 },
  basicos: { total: 60, working: 48, defective: 12, missingKeys: 43 },
  unclassified: 80,
};

export type ComputerStatus = "Funcionando" | "Com defeito";
export type ComputerCategory = "Técnico" | "Básicos" | "Não classificado";

export interface Computer {
  id: string;
  room: string;
  category: ComputerCategory;
  status: ComputerStatus;
  missingKeys: number;
  processor: string;
  ram: string;
  storage: string;
  os: string;
  lastCheck: string;
  observations: string;
}

export const COMPUTERS: Computer[] = [
  { id: "PC-001", room: "Laboratório 01", category: "Técnico", status: "Funcionando", missingKeys: 0, processor: "Intel Core i5-8400", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-15", observations: "" },
  { id: "PC-002", room: "Laboratório 01", category: "Técnico", status: "Funcionando", missingKeys: 2, processor: "Intel Core i5-8400", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-15", observations: "Faltando teclas Delete e Insert" },
  { id: "PC-003", room: "Laboratório 01", category: "Técnico", status: "Com defeito", missingKeys: 1, processor: "Intel Core i3-6100", ram: "4 GB", storage: "120 GB SSD", os: "Windows 10", lastCheck: "2024-01-10", observations: "Tela piscando intermitentemente" },
  { id: "PC-004", room: "Laboratório 02", category: "Técnico", status: "Funcionando", missingKeys: 3, processor: "Intel Core i5-7400", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-14", observations: "" },
  { id: "PC-005", room: "Laboratório 02", category: "Técnico", status: "Funcionando", missingKeys: 0, processor: "Intel Core i5-8400", ram: "16 GB", storage: "480 GB SSD", os: "Windows 11", lastCheck: "2024-01-16", observations: "" },
  { id: "PC-006", room: "Laboratório 02", category: "Técnico", status: "Com defeito", missingKeys: 2, processor: "Intel Core i3-6100", ram: "4 GB", storage: "120 GB HDD", os: "Windows 10", lastCheck: "2024-01-08", observations: "Não liga corretamente" },
  { id: "PC-007", room: "Laboratório 03", category: "Básicos", status: "Funcionando", missingKeys: 1, processor: "Intel Core i3-8100", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-13", observations: "" },
  { id: "PC-008", room: "Laboratório 03", category: "Básicos", status: "Funcionando", missingKeys: 0, processor: "Intel Core i5-7400", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-15", observations: "" },
  { id: "PC-009", room: "Laboratório 03", category: "Básicos", status: "Com defeito", missingKeys: 3, processor: "Intel Pentium G4560", ram: "4 GB", storage: "120 GB HDD", os: "Windows 10", lastCheck: "2024-01-05", observations: "Mouse com defeito, teclado com várias teclas faltando" },
  { id: "PC-010", room: "Laboratório 04", category: "Básicos", status: "Funcionando", missingKeys: 2, processor: "Intel Core i3-8100", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-14", observations: "" },
  { id: "PC-011", room: "Laboratório 04", category: "Técnico", status: "Funcionando", missingKeys: 0, processor: "Intel Core i7-8700", ram: "16 GB", storage: "480 GB SSD", os: "Windows 11", lastCheck: "2024-01-16", observations: "" },
  { id: "PC-012", room: "Sala 01", category: "Não classificado", status: "Funcionando", missingKeys: 1, processor: "Intel Core i3-6100", ram: "4 GB", storage: "120 GB SSD", os: "Windows 10", lastCheck: "2024-01-10", observations: "" },
  { id: "PC-013", room: "Sala 01", category: "Não classificado", status: "Funcionando", missingKeys: 0, processor: "Intel Core i3-7100", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-12", observations: "" },
  { id: "PC-014", room: "Sala 02", category: "Não classificado", status: "Com defeito", missingKeys: 2, processor: "Intel Pentium G4400", ram: "4 GB", storage: "120 GB HDD", os: "Windows 10", lastCheck: "2024-01-03", observations: "HD com setores defeituosos" },
  { id: "PC-015", room: "Sala 02", category: "Não classificado", status: "Funcionando", missingKeys: 1, processor: "Intel Core i3-8100", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-11", observations: "" },
  { id: "PC-016", room: "Sala 03", category: "Técnico", status: "Funcionando", missingKeys: 0, processor: "Intel Core i5-8400", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-15", observations: "" },
  { id: "PC-017", room: "Sala 03", category: "Básicos", status: "Com defeito", missingKeys: 3, processor: "Intel Core i3-6100", ram: "4 GB", storage: "120 GB HDD", os: "Windows 10", lastCheck: "2024-01-06", observations: "Fonte com problema" },
  { id: "PC-018", room: "Sala 04", category: "Não classificado", status: "Funcionando", missingKeys: 2, processor: "Intel Core i3-7100", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-09", observations: "" },
  { id: "PC-019", room: "Sala 04", category: "Técnico", status: "Funcionando", missingKeys: 0, processor: "Intel Core i5-7400", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-16", observations: "" },
  { id: "PC-020", room: "Sala 05", category: "Básicos", status: "Funcionando", missingKeys: 1, processor: "Intel Core i3-8100", ram: "8 GB", storage: "240 GB SSD", os: "Windows 10", lastCheck: "2024-01-14", observations: "" },
];

export type ProblemPriority = "Alta" | "Média" | "Baixa";
export type ProblemStatus = "Pendente" | "Em andamento" | "Resolvido";

export interface Problem {
  id: string;
  computerId: string;
  room: string;
  description: string;
  priority: ProblemPriority;
  status: ProblemStatus;
  reportedBy: string;
  reportedAt: string;
  resolvedAt?: string;
}

export const PROBLEMS: Problem[] = [
  { id: "PRB-001", computerId: "PC-003", room: "Laboratório 01", description: "Tela piscando intermitentemente", priority: "Alta", status: "Em andamento", reportedBy: "Prof. Ana Silva", reportedAt: "2024-01-10", },
  { id: "PRB-002", computerId: "PC-006", room: "Laboratório 02", description: "Computador não liga corretamente", priority: "Alta", status: "Pendente", reportedBy: "Prof. Carlos Souza", reportedAt: "2024-01-08", },
  { id: "PRB-003", computerId: "PC-009", room: "Laboratório 03", description: "Mouse com defeito e múltiplas teclas faltando", priority: "Média", status: "Pendente", reportedBy: "Prof. Maria Lima", reportedAt: "2024-01-05", },
  { id: "PRB-004", computerId: "PC-014", room: "Sala 02", description: "HD com setores defeituosos", priority: "Alta", status: "Em andamento", reportedBy: "Técnico João", reportedAt: "2024-01-03", },
  { id: "PRB-005", computerId: "PC-017", room: "Sala 03", description: "Fonte de alimentação com problema", priority: "Alta", status: "Pendente", reportedBy: "Prof. Roberto Neves", reportedAt: "2024-01-06", },
  { id: "PRB-006", computerId: "PC-002", room: "Laboratório 01", description: "Teclas Delete e Insert ausentes", priority: "Baixa", status: "Pendente", reportedBy: "Prof. Ana Silva", reportedAt: "2024-01-15", },
  { id: "PRB-007", computerId: "PC-004", room: "Laboratório 02", description: "Três teclas do teclado faltando", priority: "Baixa", status: "Resolvido", reportedBy: "Prof. Carlos Souza", reportedAt: "2023-12-20", resolvedAt: "2023-12-22", },
  { id: "PRB-008", computerId: "PC-007", room: "Laboratório 03", description: "Uma tecla do teclado faltando", priority: "Baixa", status: "Resolvido", reportedBy: "Prof. Maria Lima", reportedAt: "2023-12-18", resolvedAt: "2023-12-19", },
  { id: "PRB-009", computerId: "PC-010", room: "Laboratório 04", description: "Monitor com brilho reduzido", priority: "Média", status: "Pendente", reportedBy: "Prof. Fernanda Costa", reportedAt: "2024-01-12", },
  { id: "PRB-010", computerId: "PC-012", room: "Sala 01", description: "Tecla Enter com resposta intermitente", priority: "Média", status: "Em andamento", reportedBy: "Prof. Ricardo Santos", reportedAt: "2024-01-09", },
  { id: "PRB-011", computerId: "PC-015", room: "Sala 02", description: "Webcam não detectada", priority: "Baixa", status: "Resolvido", reportedBy: "Prof. Ana Paula", reportedAt: "2023-12-10", resolvedAt: "2023-12-15", },
  { id: "PRB-012", computerId: "PC-018", room: "Sala 04", description: "Duas teclas faltando no teclado", priority: "Baixa", status: "Pendente", reportedBy: "Prof. Eduardo Melo", reportedAt: "2024-01-08", },
  { id: "PRB-013", computerId: "PC-001", room: "Laboratório 01", description: "Lentidão ao inicializar", priority: "Média", status: "Resolvido", reportedBy: "Prof. Ana Silva", reportedAt: "2023-11-20", resolvedAt: "2023-11-25", },
  { id: "PRB-014", computerId: "PC-005", room: "Laboratório 02", description: "Barulho incomum no HD", priority: "Alta", status: "Resolvido", reportedBy: "Prof. Carlos Souza", reportedAt: "2023-12-01", resolvedAt: "2023-12-05", },
  { id: "PRB-015", computerId: "PC-020", room: "Sala 05", description: "Uma tecla numérica faltando", priority: "Baixa", status: "Pendente", reportedBy: "Prof. Gabriela Torres", reportedAt: "2024-01-13", },
];

export type MaintenanceStatus = "Pendente" | "Em andamento" | "Concluída";

export interface Maintenance {
  id: string;
  computerId: string;
  room: string;
  type: string;
  description: string;
  status: MaintenanceStatus;
  technician: string;
  scheduledDate: string;
  completedDate?: string;
}

export const MAINTENANCES: Maintenance[] = [
  { id: "MNT-001", computerId: "PC-003", room: "Laboratório 01", type: "Corretiva", description: "Substituição do cabo de vídeo", status: "Em andamento", technician: "João Técnico", scheduledDate: "2024-01-18", },
  { id: "MNT-002", computerId: "PC-006", room: "Laboratório 02", type: "Corretiva", description: "Diagnóstico de problema na inicialização", status: "Pendente", technician: "Maria Técnica", scheduledDate: "2024-01-20", },
  { id: "MNT-003", computerId: "PC-014", room: "Sala 02", type: "Corretiva", description: "Substituição do HD", status: "Em andamento", technician: "João Técnico", scheduledDate: "2024-01-15", },
  { id: "MNT-004", computerId: "PC-001", room: "Laboratório 01", type: "Preventiva", description: "Limpeza interna e atualização de drivers", status: "Concluída", technician: "Pedro Técnico", scheduledDate: "2023-12-15", completedDate: "2023-12-15", },
  { id: "MNT-005", computerId: "PC-005", room: "Laboratório 02", type: "Corretiva", description: "Substituição do HD por SSD", status: "Concluída", technician: "João Técnico", scheduledDate: "2023-12-05", completedDate: "2023-12-05", },
  { id: "MNT-006", computerId: "PC-011", room: "Laboratório 04", type: "Preventiva", description: "Limpeza completa e verificação de hardware", status: "Pendente", technician: "Maria Técnica", scheduledDate: "2024-01-22", },
  { id: "MNT-007", computerId: "PC-017", room: "Sala 03", type: "Corretiva", description: "Substituição da fonte de alimentação", status: "Pendente", technician: "Pedro Técnico", scheduledDate: "2024-01-19", },
  { id: "MNT-008", computerId: "PC-008", room: "Laboratório 03", type: "Preventiva", description: "Formatação e reinstalação do sistema operacional", status: "Concluída", technician: "João Técnico", scheduledDate: "2023-11-30", completedDate: "2023-11-30", },
  { id: "MNT-009", computerId: "PC-013", room: "Sala 01", type: "Preventiva", description: "Atualização do sistema e antivírus", status: "Concluída", technician: "Maria Técnica", scheduledDate: "2023-12-20", completedDate: "2023-12-20", },
  { id: "MNT-010", computerId: "PC-019", room: "Sala 04", type: "Preventiva", description: "Verificação geral do hardware", status: "Concluída", technician: "Pedro Técnico", scheduledDate: "2024-01-10", completedDate: "2024-01-10", },
];

export interface HistoryEvent {
  id: string;
  date: string;
  time: string;
  user: string;
  computerId: string;
  action: string;
  type: "status" | "maintenance" | "problem" | "update";
}

export const HISTORY: HistoryEvent[] = [
  { id: "H-001", date: "2024-01-16", time: "14:32", user: "Admin Escola", computerId: "PC-005", action: "Status alterado para Funcionando", type: "status" },
  { id: "H-002", date: "2024-01-16", time: "11:15", user: "João Técnico", computerId: "PC-019", action: "Manutenção preventiva concluída", type: "maintenance" },
  { id: "H-003", date: "2024-01-15", time: "16:45", user: "Prof. Ana Silva", computerId: "PC-002", action: "Problema reportado: teclas faltando", type: "problem" },
  { id: "H-004", date: "2024-01-15", time: "09:20", user: "Admin Escola", computerId: "PC-001", action: "Dados do computador atualizados", type: "update" },
  { id: "H-005", date: "2024-01-14", time: "15:30", user: "Maria Técnica", computerId: "PC-010", action: "Verificação realizada", type: "maintenance" },
  { id: "H-006", date: "2024-01-13", time: "10:00", user: "Prof. Maria Lima", computerId: "PC-007", action: "Problema reportado: tecla faltando", type: "problem" },
  { id: "H-007", date: "2024-01-12", time: "14:00", user: "Prof. Fernanda Costa", computerId: "PC-009", action: "Problema reportado: mouse e teclado", type: "problem" },
  { id: "H-008", date: "2024-01-10", time: "08:30", user: "João Técnico", computerId: "PC-003", action: "Manutenção corretiva iniciada", type: "maintenance" },
  { id: "H-009", date: "2024-01-09", time: "11:45", user: "Prof. Ricardo Santos", computerId: "PC-012", action: "Problema reportado: tecla Enter", type: "problem" },
  { id: "H-010", date: "2024-01-08", time: "13:20", user: "Prof. Carlos Souza", computerId: "PC-006", action: "Problema reportado: não liga", type: "problem" },
  { id: "H-011", date: "2024-01-06", time: "09:00", user: "Prof. Roberto Neves", computerId: "PC-017", action: "Problema reportado: fonte com defeito", type: "problem" },
  { id: "H-012", date: "2024-01-05", time: "16:10", user: "João Técnico", computerId: "PC-014", action: "Manutenção corretiva iniciada", type: "maintenance" },
  { id: "H-013", date: "2024-01-03", time: "10:30", user: "Técnico João", computerId: "PC-014", action: "Problema reportado: HD defeituoso", type: "problem" },
  { id: "H-014", date: "2023-12-22", time: "15:00", user: "Pedro Técnico", computerId: "PC-004", action: "Problema resolvido: teclas repostas", type: "maintenance" },
  { id: "H-015", date: "2023-12-20", time: "09:15", user: "Pedro Técnico", computerId: "PC-001", action: "Manutenção preventiva concluída", type: "maintenance" },
  { id: "H-016", date: "2023-12-15", time: "14:00", user: "Prof. Ana Paula", computerId: "PC-015", action: "Problema resolvido: webcam", type: "maintenance" },
  { id: "H-017", date: "2023-12-05", time: "11:00", user: "João Técnico", computerId: "PC-005", action: "HD substituído por SSD", type: "maintenance" },
  { id: "H-018", date: "2023-12-01", time: "09:00", user: "Prof. Carlos Souza", computerId: "PC-005", action: "Problema reportado: barulho no HD", type: "problem" },
  { id: "H-019", date: "2023-11-30", time: "13:00", user: "João Técnico", computerId: "PC-008", action: "Sistema reinstalado com sucesso", type: "maintenance" },
  { id: "H-020", date: "2023-11-25", time: "10:00", user: "Pedro Técnico", computerId: "PC-001", action: "Lentidão corrigida após limpeza", type: "maintenance" },
];

export const MOCK_USERS = [
  { id: "U-001", name: "Admin Escola", email: "admin@escola.edu.br", role: "Administrador", lastAccess: "2024-01-16" },
  { id: "U-002", name: "João Técnico", email: "joao.tecnico@escola.edu.br", role: "Técnico", lastAccess: "2024-01-16" },
  { id: "U-003", name: "Maria Técnica", email: "maria.tecnica@escola.edu.br", role: "Técnico", lastAccess: "2024-01-15" },
  { id: "U-004", name: "Pedro Técnico", email: "pedro.tecnico@escola.edu.br", role: "Técnico", lastAccess: "2024-01-14" },
  { id: "U-005", name: "Prof. Coordenadora", email: "coordenacao@escola.edu.br", role: "Visualizador", lastAccess: "2024-01-12" },
];
