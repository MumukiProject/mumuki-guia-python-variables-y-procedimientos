Entonces, ¿es necesario darle valor a nuestras variables antes de usarlas?

¡Si! :smile: Cuando declarás una variable tenés que darle un valor inicial, lo cual se conoce como _inicializar_ la variable.

¡Y sorpresa! Podemos declarar variables tanto directamente en el programa, como dentro de un `def`:

```python
def cuenta_misteriosa(numero):
  el_doble = numero * 2
  if el_doble > 10:
    return el_doble
  else:
    return 0
```

Las variables declaradas dentro de un `def`, conocidas como _variables locales_, no presentan mayor misterio. Sin embargo, hay que tener un particular cuidado :warning: ya que sólo se pueden utilizar dentro del `def` en cuestión. Si quiero referenciarla desde un programa:

```python
el_cuadruple = el_doble * 4
```

Boom, ¡se romperá! :collision:

Sin embargo, las variables declaradas directamente en el programa, conocidas como _variables globales_, pueden ser leídas desde cualquier `def`. Por ejemplo:

```python
peso_maximo_del_equipaje_en_gramos = 5000

def puede_llevar(peso_equipaje):
  return peso_equipaje <= peso_maximo_del_equipaje_en_gramos
```

> Veamos si queda claro: escribí una función `ascensor_sobrecargado`, que toma una cantidad de personas y dice si entre todas superan la carga máxima de 300 kg.
>
> Tené en cuenta que nuestra función va a utilizar dos variables globales:
>
* `peso_promedio_persona_en_kilogramos`, la cual ya está declarada,
* `carga_maxima_en_kilogramos` que vas tenés que declarar.
