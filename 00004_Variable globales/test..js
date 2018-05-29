describe("", function() {
  it("ascensorSobrecargado(4) con pesoPromedioPersonaEnKgs = 70", function() {
    pesoPromedioPersonaEnKgs = 70;
    assert(!ascensorSobrecargado(4))
  })
  it("ascensorSobrecargado(4) con pesoPromedioPersonaEnKgs = 80", function() {
    pesoPromedioPersonaEnKgs = 80;
    assert(ascensorSobrecargado(4))
  })
  it("asensorSobrecagado(2) con pesoPromedioPersonaEnKgs = 80", function() {
    pesoPromedioPersonaEnKgs = 80;
    assert(!ascensorSobrecargado(2))
  })
  it("ascensorSobrecargado(5) con pesoPromedioPersonaEnKgs = 80", function() {
    pesoPromedioPersonaEnKgs = 80;
    assert(ascensorSobrecargado(5))
  })

    

})