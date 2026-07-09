import type { Request, Response } from 'express';
import { AuditService } from '../services/audit.service.js';

const auditService = new AuditService();

export class AuditController {
  public createAudit(req: Request, res: Response): void {
    const { url } = req.body as { url?: string };

    if (!url) {
      res.status(400).json({ message: 'URL is required.' });
      return;
    }

    const result = auditService.createMockResult({ url });
    res.status(200).json(result);
  }
}
