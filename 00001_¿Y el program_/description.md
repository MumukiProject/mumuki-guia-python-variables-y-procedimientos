Ahora bien, más allá de que podamos consultar el resultado de una función a través de la consola, también aprendimos anteriormente que los programas tienen un punto de entrada: el `program`. ¿Dónde quedó?

La respuesta es tan simple como sorprendente: en Python todo lo que escribamos fuera de una `function` será, implícitamente, dicho punto de entrada. Por ejemplo, si queremos un programa que imprime por pantalla el clásico `"Hola, mundo!"`, lo podremos escribir así:

```python
print("Hola, mundo!")
```

O si queremos un programa que tire tres veces los dados e imprima sus resultados, podemos escribirlo así:

```python
print("Tirando dados")

primera_tirada = tirar_dato()
segunda_tirada = tirar_dato()
tercera_tirada = tirar_dato()

print("La primera tirada dio ", primera_tirada)
print("La segunda tirada dio ", segunda_tirada)
print("La tercera tirada dio ", tercera_tirada)
```

> Escribí y enviá este programa


