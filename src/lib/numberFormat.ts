/**
 * Format numbers for display with appropriate units (K, M, B)
 */
export function formatNumber(value: number, currency = false): string {
  const prefix = currency ? '€' : '';
  
  if (value >= 1000000000) {
    return `${prefix}${(value / 1000000000).toFixed(1)}B`;
  }
  if (value >= 1000000) {
    return `${prefix}${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${prefix}${(value / 1000).toFixed(0)}K`;
  }
  
  return `${prefix}${value.toLocaleString()}`;
}

/**
 * Format currency with appropriate commas
 */
export function formatCurrency(value: number): string {
  return `€${value.toLocaleString()}`;
}

/**
 * Format percentages with proper decimals
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

/**
 * Format power consumption with units
 */
export function formatPower(watts: number): string {
  if (watts >= 1000) {
    return `${(watts / 1000).toFixed(1)}kW`;
  }
  return `${watts}W`;
}

/**
 * Format data sizes with units
 */
export function formatDataSize(bytes: number): string {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  if (bytes === 0) return '0B';
  
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)}${sizes[i]}`;
}