/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Activity {
  id: string;
  title: string;
  period: string;
  category: string;
  keywords: string[];
  bullets: string[];
}

export interface Strength {
  name: string;
  nameEng: string;
  percentage: number;
  description: string;
  iconName: string;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  dueDate: string;
}

export interface ProposalTemplate {
  id: string;
  title: string;
  objective: string;
  resources: string[];
  steps: string[];
  risks: string[];
}
