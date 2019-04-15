¡Sorpresa! Podemos declarar variables tanto directamente en el programa, como dentro de una `function`:

```python
def cuenta_misteriosa(unNumnumeroero):
  el_doble = numero * 2
  if (el_doble > 10) {
    return el_doble
  } else {
    return 0
  }
```

Las variables declaradas dentro de una `function`, conocidas como _variables locales_, no presentan mayor misterio. Sin embargo, hay que tener un particular cuidado: sólo se pueden utilizar desde dentro de la `function` en cuestión. Si quiero referenciarla desde un programa:

```python
let elCuadruple = el_doble * 4
```

Kaboom, ¡se romperá! :collision:

Sin embargo, las variables declaradas directamente en el programa, conocidas como _variables globales_, pueden ser utilizadas desde cualquier `function`. Por ejemplo:

```python
let pesoMaximoEquipajeEnGramos = 5000

def puedeLlevar(pesoEquipaje):
  return pesoEquipaje <= pesoMaximoEquipajeEnGramos

```

> Veamos si queda claro: escribí una función `ascensorSobrecargado`, que toma una cantidad de personas y dice si entre todos superan la carga máxima del ascensor.
>
> Tené en cuenta que se estima que la carga máxima del ascensor en 300kg, y que el peso promedio por persona es una variable global: `pesoPromedioPersonaEnKilogramos`.

