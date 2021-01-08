const bodyInfo = ((document as any).compatMode && (document as any).compatMode == 'CSS1Compat') ? (document as any).documentElement : (document as any).body;

export default bodyInfo
