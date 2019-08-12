var express = require('express');
var router = express.Router();

var miembros = [

{
    id:1,
    nombre:'Jairo',
    apellido:'Brenes'
},

{
    id:2,
    nombre:'Armando',
    apellido:'Blanco'
},

{
    id:3,
    nombre:'Esteban',
    apellido:'Tenorio'
},
{
    id:4,
    nombre:'Ernesto',
    apellido:'Jimenez'
},
{
    id:5,
    nombre:'Luisa',
    apellido:'Morales'
},
{
    id:5,
    nombre:'Ricardo',
    apellido:'Saprissa'
}
];



router.get('/', function (req,res){
res.json(miembros);
});


router.post('/', function (req,res){
    console.log(req.body);
    res.json(miembros);
    });


//sino hago esto nada de lo que hice anteriormente sera visible
module.exports = router;

//router.get('/mostrar'); si quiero llegar a mostrar