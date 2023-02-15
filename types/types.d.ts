declare module '*.svg' {
  const content: React.FC<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  export default content
}

export type Modify<T, R> = Omit<T, keyof R> & R
