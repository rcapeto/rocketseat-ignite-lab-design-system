export function getClassName(classObj: Record<string, string>): string {
   const className = Object.keys(classObj).map(key => classObj[key]).join(' ');
   return className;
}