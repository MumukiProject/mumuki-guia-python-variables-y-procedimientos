¡Sorpresa! Podemos declarar variables tanto directamente en el programa, como dentro de un `def`:

```python
def cuenta_misteriosa(numero):
  el_doble = numero * 2
  if el_doble > 10:
    return el_doble
  else:
    return 0
```

Las variables declaradas dentro de un `def`, conocidas como _variables locales_, no presentan mayor misterio. Sin embargo, hay que tener un particular cuidado: sólo se pueden utilizar desde dentro del `def` en cuestión. Si quiero referenciarla desde un programa:

```python
el_cuadruple = el_doble * 4
```

Kaboom, ¡se romperá! :collision:

Sin embargo, las variables declaradas directamente en el programa, conocidas como _variables globales_, pueden ser leídas desde cualquier `def`. Por ejemplo:

```python
peso_maximo_del_equipaje_en_gramos = 5000

def puede_llevar(peso_equipaje):
  return peso_equipaje <= peso_maximo_del_equipaje_en_gramos
```

> Veamos si queda claro: escribí una función `ascensor_sobrecargado`, que toma una cantidad de personas y dice si entre todos superan la carga máxima del ascensor.
>
> Tené en cuenta que se estima que la carga máxima del ascensor en 300kg, y que el peso promedio por persona es una variable global: `peso_promedio_persona_en_kilogramos`.

