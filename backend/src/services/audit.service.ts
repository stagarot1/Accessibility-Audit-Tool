import type { AuditRequest, AuditResult } from '../types/index.js';

export class AuditService {
  public createMockResult(request: AuditRequest): AuditResult {
    return {
      url: request.url,
      score: 80,
      issues: [
        {
          type: 'color-contrast',
          severity: 'high',
          description: 'Example accessibility issue',
          suggestion: 'Improve contrast ratio'
        }
      ]
    };
  }
}
