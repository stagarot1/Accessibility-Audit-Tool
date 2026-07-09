export interface AuditRequest {
  url: string;
}

export interface AccessibilityIssue {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  suggestion: string;
}

export interface AuditResult {
  url: string;
  score: number;
  issues: AccessibilityIssue[];
}
