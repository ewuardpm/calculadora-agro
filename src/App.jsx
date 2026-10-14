import React, { useState } from 'react';

export default function AgroDeliveryApp() {
  const [modoActivo, setModoActivo] = useState('compras');

  // ==========================================
  // ESTADOS: MESA
  // ==========================================
  const [yMesa, setYMesa] = useState('');
  const [aMesa, setAMesa] = useState('');
  const [oMesa, setOMesa] = useState('');
  const [auMesa, setAuMesa] = useState('');
  const [cMesa, setCMesa] = useState('');
  const [cambiosMesa, setCambiosMesa] = useState('');

  // ==========================================
  // ESTADOS: COMPRAS
  // ==========================================
  const [mBolsas, setMBolsas] = useState('');
  const [mCambios, setMCambios] = useState('');
  const [margen, setMargen] = useState('30');
  
  const [pOcumo, setPOcumo] = useState('6.00');
  const [pApio, setPApio] = useState('2.50');
  const [pYuca, setPYuca] = useState('2.00');
  const [pAuyama, setPAuyama] = useState('1.00');
  const [pCelery, setPCelery] = useState('1.00');

  // Lector de números a prueba de fallos
  const num = (valor) => {
    if (!valor || valor === '') return 0;
    const normalizado = String(valor).replace(',', '.');
    const parseado = parseFloat(normalizado);
    return isNaN(parseado) ? 0 : parseado;
  };

  // ==========================================
  // LÓGICA: MODO EMPAQUETADO 
  // ==========================================
  const pesoTotalMesa = num(yMesa) + num(aMesa) + num(oMesa) + num(auMesa) + num(cMesa);
  const grupoSurtidoMesa = num(yMesa) + num(aMesa) + num(oMesa);
  
  let pctCelery = pesoTotalMesa > 0 ? num(cMesa) / pesoTotalMesa : 0;
  let pctAuyama = pesoTotalMesa > 0 ? num(auMesa) / pesoTotalMesa : 0;
  let pctSurtido = pesoTotalMesa > 0 ? grupoSurtidoMesa / pesoTotalMesa : 0;

  if (pctCelery > 0.05) {
    const excedente = pctCelery - 0.05;
    pctCelery = 0.05;
    const subTotal = pctAuyama + pctSurtido;
    if (subTotal > 0) {
      pctAuyama += excedente * (pctAuyama / subTotal);
      pctSurtido += excedente * (pctSurtido / subTotal);
    }
  }

  const recetaCambio = {
    surtido: Math.round(800 * pctSurtido),
    auyama: Math
