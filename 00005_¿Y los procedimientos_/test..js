describe("versos", function() {
  it("deberia imprimir los versos", function() {
    versos_martin_fierro()
    assert.equal(fakeConsole.toString(), "Aquí me pongo a cantar\nAl compás de la vigüela\nQue el hombre que lo desvela\nUna pena extraordinaria\n")
  })
  it("no deberia retornar nada", function() {
    assert(versos_martin_fierro() === undefined)
  })

})

