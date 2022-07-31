import Journey from "./journey";
import Station from "./station";


Journey.belongsTo(Station, {as: 'departureStation', targetKey: 'id'});
Journey.belongsTo(Station, {as: 'returnStation', targetKey: 'id'});


