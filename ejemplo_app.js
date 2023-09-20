//1. Primera forma
import React, { useState } from "react";

React.useCallback
React.useMemo
React.useEffect

//2. Segunda forma
import { useCallback, useMemo, useEffect } from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native"; 
useCallback //procesa el resultado y guarda los daos, recibe parametros 
useMemo //no puede tener parametros, su resultado lo memeoriza (memoriza la funcion)
useEffect //se ejecuta despues de que se renderice el html
useState //almacena valores

const [mulplicador, setMulplicador]= useState(1);
const [factorial, setFcatorial]= useState(0);

const getResult=useCallback(
    (numero)=>{ 
        //tu código
        //your code here
        //return (devuelve)
        return state.mulplicador * numero 
    }, 
    [mulplicador] //lista de dependencias (variables)
)

//ejemplo de useCallback
    function factorial(){
        let total=1;
        let start=1;
        for (let i=0; i<factorial; i++){
            total*= i;
        }
        console.log(total)
    }
    [factorial]

//se crean los componentes | componentWillMount
//cuando se renderizan | componentDidMount
//cuando se actualizan | componentDidUpdate
//cuando se destruyen | componentWillUnmount


//hook - gancho |
//componentDidMount
//componentDidUpdate
//componentWillUnmount

useEffect(
    function(){
      
    }, 
    []
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF", 
        alignItems: "center",
        justifyContent: "center", 
    },
    title: {
        color: "#000",
        fontSize: 24,
    }
})

