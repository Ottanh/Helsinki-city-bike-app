import Journey from "./journey";
import Station from "./station";


Journey.belongsTo(Station, {as: 'departureStationId'});
Journey.belongsTo(Station, {as: 'returnStationId'});


