import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import jsyaml from 'js-yaml';
import { resolve } from 'path';
import fs from 'fs';
import * as ItemController from '../controllers/itemController';
import * as AccountController from '../controllers/accountController';

const router = Router();
const docPath = resolve(`src`, 'openapi.yaml');
const openApi: any = jsyaml.load(fs.readFileSync(docPath, 'utf-8'));

//Item
router.post('/api/v1/item', ItemController.create);
router.get('/api/v1/items', ItemController.getAll);
//Account
router.post('/api/v1/account', AccountController.create);
//Doc
router.use('/docs', swaggerUI.serve, swaggerUI.setup(openApi));

export default router;
