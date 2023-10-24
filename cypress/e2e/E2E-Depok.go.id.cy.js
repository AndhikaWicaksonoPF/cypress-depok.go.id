/// <reference types="cypress" />

describe('End-to-End Testing - depok.go.id', { testIsolation: false }, () => {

    beforeEach('Membuka Wesbsite', () => {
        cy.visit('https://depok.go.id/')
        cy.get('.card-body > :nth-child(2) > .btn-light').click()
    })

    it('Mengecek gambar pada komoditas pasar', () => {
        //Memastikan gambar komoditas garam tidak terlihat pada website//
        cy.get(':nth-child(59) > .item > .card > .card-body > .img-komoditi').should('not.be.visible')
    })

    it('Membuka agenda Kota Depok', () => {
        cy.get('#mendatang-tab').click()
        cy.get('#mendatang > div.pt-2 > .pt-2').click()
        cy.contains('Agenda').should('be.visible')
    })

    it('Mengecek demografi kota Depok', () => {
        //Memastikan chart demografi kecamatan pandoran mas tidak terlihat pada website//
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(6) > a').click()
        cy.get('#kecamatan').select('Pancoran Mas')
        cy.get('#kelurahan').select('Depok Jaya')
        cy.get('#submit').click()

        cy.get('#kelamin-chart').should('be.visible')
        cy.get('#agama-chart').should('be.visible')
        cy.get('#pendidikan-chart').should('be.visible')
        cy.get('#status-kawin-chart').should('be.visible')
        cy.get('#kelompok-umur-chart').should('be.visible')
        cy.get('#pekerjaan-chart').should('be.visible')

    })

    it('Mengecek pendidikan kota Depok', () => {
        //Memastikan chart pendidikan kecamatan pandoran mas tidak terlihat pada website//
        cy.get(':nth-child(1) > .list-unstyled > :nth-child(7) > a').click()
        cy.get('#kecamatan').select('Pancoran Mas')
        cy.get('#kelurahan').select('Depok Jaya')
        cy.get('#submit').click()

        cy.get('#sekolah-chart').should('be.visible')

    })




})