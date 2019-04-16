Volvamos un momento al código anterior. ¿Notás algo extraño en esta expresión?

```python
"La primera tirada dio " + primera_tirada
```

Utilizamos el operador `+` de una forma diferente, operando un string y un número, y lo que hizo fue concatenar al string con la representación textual del número. Es decir que:

* si operamos dos números con `+`, se suman
* si operamos dos strings con `+`, se concatenan
* si operamos un string y un número `+`, se _convierte implícitamente_ el número a string, y luego se concatenan, al igual que antes

En Python, estas conversiones implícitas, también llamadas _coerciones_, ocurren mucho.

_¡Quizás incluso [más de lo que nos gustaría](https://archive.org/details/wat_destroyallsoftware)!_ :sweat:

> Veamos si queda claro, escribí una función `elefantes_equilibristas`, que tome un número de elefantes y **devuelva** una rima de una conocida canción:
>
> ```python
> ム elefantes_equilibristas(3)
> "3 elefantes se balanceaban"
> ム elefantes_equilibristas(462)
> "462 elefantes se balanceaban"
> ```
>
