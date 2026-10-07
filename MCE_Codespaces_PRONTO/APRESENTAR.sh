#!/usr/bin/env bash
set -e
echo ""
echo "========================================"
echo "          MCE - INICIANDO PROJETO"
echo "========================================"
echo ""

if [ ! -d "node_modules" ]; then
  echo "Primeira execução: instalando dependências..."
  npm install
fi

echo ""
echo "Abrindo servidor na porta 5173..."
echo "No Codespaces, abra a aba PORTS e clique em Open in Browser."
echo ""
npm run dev
