import StringIO
import sys

def capture_stdout(block):
  out = StringIO.StringIO()
  sys.stdout = out
  block()
  sys.stdout = sys.__stdout__
  return out.getvalue()


