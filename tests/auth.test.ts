/* eslint-disable import/extensions */
import axios from 'axios';
import fs from 'fs';
import Auth from '../src/auth';
import constants from '../src/constants';
import { GnConfig } from '../src/interfaces/gnConfig.interface';

jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;
mockFs.readFileSync.mockReturnValueOnce('');

jest.mock('axios', () =>
	jest
		.fn()
		.mockResolvedValueOnce({
			status: 200,
			data: {
				access_token: 'RfSfS9AJkLu7jPjOp2IbrI',
				token_type: 'Bearer',
				expires_in: 3600,
				scope: 'cob.read',
			},
		})
		.mockResolvedValueOnce({
			status: 200,
			data: {
				access_token: '1723ad73',
				refresh_token: '36accb15',
				expires_in: 600,
				expire_at: '1656012603684',
				token_type: 'Bearer',
			},
		}),
);

const credentialsPix: GnConfig = {
	sandbox: false,
	client_id: 'Client_Id',
	client_secret: 'Client_Secret',
	certificate: 'Certificado_Pix',
	authRoute: { route: '/oauth/token', method: 'post' },
	baseUrl: 'https://api-pix.gerencianet.com.br',
};

const credentials: GnConfig = {
	sandbox: false,
	client_id: 'Client_Id',
	client_secret: 'Client_Secret',
	authRoute: { route: '/oauth/token', method: 'post' },
	baseUrl: 'https://api.gerencianet.com.br/v1',
};

describe('Auth Tests', () => {
	it.each([
		{
			description: 'Should get Access_Token with pix certificate',
			options: credentialsPix,
			expected: { access_token: expect.any(String), token_type: 'Bearer', expires_in: 3600, scope: 'cob.read' },
		},
		{
			description: 'Should get Access_Token without pix certificate [API EMISSÕES]',
			options: credentials,
			expected: { access_token: '1723ad73', refresh_token: '36accb15', expires_in: 600, expire_at: '1656012603684', token_type: 'Bearer' },
		},
	])('TEST $# : $description', async ({ options, expected }) => {
		const auth = new Auth(options, constants);
		const res = await auth.getAccessToken();
		expect(res).toMatchObject(expected);
		expect(axios).toHaveBeenCalled();
	});
});
