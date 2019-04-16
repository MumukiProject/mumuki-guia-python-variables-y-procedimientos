En el ejercicio anterior, construiste una función que se ejecutaba con el sólo fin de imprimir por pantalla. Y por ello, tuvimos que devolver un valor cualquiera. ¿No te huele mal?

Además, hagamos memoria: cuando queremos reutilizar código, podíamos declarar:

* _funciones_, que siempre devuelven algo y no producen ningún efecto
* _procedimientos_, que no devuelven nada, y producen efectos

Entonces `versos_martin_fierro`, no es una función... ¡sino un procedimiento! ¿Cómo se declaran procedimientos en Python?

¡De la misma forma que las funciones!: usando la palabra clave `def`.

```python
def versos_martin_fierro():
    print("Aquí me pongo a cantar")
    print("Al compás de la vigüela")
    print("Que el hombre que lo desvela")
    print("Una pena extraordinaria")
```

> Envía esta nueva versión de `versos_martin_fierro`
