def funcion_misteriosa(n, m):
  return 'w' + repeat_char('o', n) + repeat_char('w', m) + '!'

def repeat_char(c, n):
  return "".join([c] * n)

