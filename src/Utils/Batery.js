export const Bateria = navigator.getBattery().then((battery) =>  {

  console.log(`A bateria está carregando? ${battery.charging}`);
  console.log(`Bateria com: ${battery.level * 100}%`);
  console.log(`Tempo de carga: ${battery.chargingTime}`);
  console.log(`Tempo de descarga: ${battery.dischargingTime}`);

});