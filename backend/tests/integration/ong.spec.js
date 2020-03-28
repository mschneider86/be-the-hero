const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();

    });


    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAE",
            email: "contatoapa@d.com.br",
            whatsapp: "4545454545",
            city: "Belo Horizonte",
            uf: "MG"
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    afterAll(async () => {
        await connection.destroy();
      });
});