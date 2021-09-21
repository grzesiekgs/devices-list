export type BatteryLevels = 'low' | 'medium' | 'high';

export interface BatteryLevelProps {
  batteryLevel: number;
  className?: string;
}
