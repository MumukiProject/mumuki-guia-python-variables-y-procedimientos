Volvamos un momento al código anterior. ¿Notás algo extraño en esta expresión?

```python
"La primera tirada dio " + str(primera_tirada)
```

Como vimos anteriormente el operador `+` nos sirve para concatenar dos strings. Pero en este caso teníamos un string (`"La primera tirada dio "`) y un número (`primera_tirada`), ¡qué problema! Por eso, utilizamos la función `str`, que convierte un valor cualquiera a un string :wink:.

> Veamos si queda claro, escribí una función `elefantes_equilibristas`, que tome un número de elefantes y **devuelva** una rima de una conocida canción:
>
> ```python
> ム elefantes_equilibristas(3)
> "3 elefantes se balanceaban"
> ム elefantes_equilibristas(462)
> "462 elefantes se balanceaban"
> ```
>
