Las variables no serían tan interesantes si no se pudieran modificar. Afortunadamente, Python nos da nuevamente el gusto y nos lo permite:

```python
# inicializamos la variable...
dias_sin_accidentes_con_velocirraptores = 0

# ...y más adelante, la actualizamos
dias_sin_accidentes_con_velocirraptores = dias_sin_accidentes_con_velocirraptores + 1
```

Sin embargo, hay que tener un cuidado particular si trabajamos con variables globales: si queremos modificarlas dentro de un procedimiento, deberemos anteponer `global` a su nombre:

```python
# inicializamos la variable al inicio de nuestro programa
dias_sin_accidentes_con_velocirraptores = 0

def pasar_un_dia_normal():
  # indicamos a Python que vamos a realizar modificaciones sobre la variable global
  global dias_sin_accidentes_con_velocirraptores

  # dentro de un procedimiento, la actualizamos
  dias_sin_accidentes_con_velocirraptores = dias_sin_accidentes_con_velocirraptores + 1
```

> ¡Ahora vamos a hacer algo de dinero :moneybag:!
>
> Escribí un procedimiento `aumentar_fortuna` que duplique el valor de la variable global `pesos_en_mi_billetera`. No declares la variable, ya lo hicimos nosotros por vos (con una cantidad secreta de dinero :wink:)
