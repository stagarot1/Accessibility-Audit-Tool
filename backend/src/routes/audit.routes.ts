import { Router } from 'express';
import { AuditController } from '../controllers/audit.controller.js';

const router = Router();
const auditController = new AuditController();

router.post('/audit', auditController.createAudit.bind(auditController));

export default router;
