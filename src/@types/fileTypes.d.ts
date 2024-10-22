declare module "*.module.css" {
    const styles: { [key: string]: string };
    export default styles;
}

declare module "*.css" {
    const content: string;
    export default content;
}

declare module "*.jpg" {
    const content: string;
    export default content;
}