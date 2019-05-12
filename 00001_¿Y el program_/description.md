Ahora bien, más allá de que podamos consultar el resultado de una función a través de la consola, también aprendimos anteriormente que los programas tienen un punto de entrada: el `program`. Pero, ¿dónde quedó?

La respuesta es tan simple como sorprendente: en Python todo lo que escribamos fuera de un `def` será, implícitamente, dicho punto de entrada. Por ejemplo, si queremos un programa que imprime por pantalla el clásico `"Hola, mundo!"`, lo podremos escribir así:

```python
print("Hola, mundo!")
```

O si queremos un programa que tire tres veces los dados e imprima sus resultados, podemos escribirlo así:

```python
print("Tirando dados")

print("La primera tirada es " + str(tirar_dado()))
print("La segunda tirada es " + str(tirar_dado()))
print("La tercera tirada es " + str(tirar_dado()))
```

> Escribí y enviá este programa.


