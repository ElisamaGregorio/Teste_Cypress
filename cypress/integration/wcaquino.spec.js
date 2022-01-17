///<reference types="cypress"/>

describe("CENÁRIO 1", () => {

    before(() => {
        cy.visit("https://wcaquino.me/cypress/componentes.html")
        cy.title().should('be.equal', 'Campo de Treinamento')
    })
    describe("VALIDAÇÃO", () => {
        it("assertividade", () => {
            const x = 1;
            const y = 2;

            expect(x).equal(1)
            expect(x).not.be.equal(2)
            
        })
    })
    describe("CAMPOS DE TEXTO", () => {
        it("inserindo nome", () => {

            cy.get('input[type^="text"][id^="formNome"]').should('be.empty').and('be.visible').and('exist')
            cy.get('input[type^="text"][id^="formNome"]').type('Elisama')

            cy.get('input[type^="text"][id^="formSobrenome"]').type('Santos')
            cy.get('input[type^="text"][id^="formSobrenome"]').should('be.empty').and('be.visible').and('exist')

        })
        it("inserindo sugestões", () => {

            cy.get('textarea[id^="elementosForm\:sugestoes"]').should('be.empty').and('be.visible').and('exist')
            cy.get('textarea[id^="elementosForm\:sugestoes"]').type('test')
        })
        describe("CHECKBOXES E RADIO BUTTONS", () => {
            it("selecionar sexo", () => {
                cy.get('#formSexoFem').should('be.empty').and('be.visible').and('exist')
                cy.get('#formSexoFem').click()
            })
            it("selecionar comida favorita", () => {
                cy.get('#formComidaCarne').check()
                cy.get('#formComidaFrango').check()
                cy.get('#formComidaPizza').check()
            })

        })
        describe("SELECT'S", () => {
            it("pratica de esportes", () => {
                cy.get('#formEsportes').should('be.visible').and('exist')
                cy.get('#formEsportes').select('nada')
            })
            it("escolaridade", () => {
                cy.get('#formEscolaridade').should('be.visible').and('exist')
                cy.get('#formEscolaridade').select('superior')
            })
        })

    })
    describe("ENVIO FORMULÁRIO", () => {
        it("enviar formulário", () => {
            cy.screenshot()
            cy.get('#formCadastrar').click()
        })

    })
    describe("CONFIRMAÇÃO MENSAGEM DE CADASTRO", () => {
        it("mensagem 'Cadastrado!'", () => {
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    })
})
