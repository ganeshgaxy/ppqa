export interface LocatorFragmentProps {
    search(text: string): Promise<LocatorFragmentProps>;
    typeIn(text: string): Promise<LocatorFragmentProps>;
    pressKey(text: string): Promise<LocatorFragmentProps>;
}
export declare class LocatorFragment implements LocatorFragmentProps {
    search(text: string): Promise<LocatorFragmentProps>;
    typeIn(text: string): Promise<LocatorFragmentProps>;
    pressKey(text: string): Promise<LocatorFragmentProps>;
}
