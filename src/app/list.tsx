export function AppToolList() {
  return (
    <div>
      <h1 className="text-3xl text-accent-11 mb-16 font-medium">
        If I have to setup a new project
      </h1>
      <p className="text-lg mb-8">
        This setup use the following tools:
      </p>
      <ul className="list-disc list-inside">
        <Item href="https://vite.dev/guide/">Vite + React TS</Item>
        <Item href="https://www.radix-ui.com/colors">
          Radix Colors
        </Item>
        <Item href="https://tailwindcss.com/docs/installation/using-vite">
          Tailwind CSS
        </Item>
        <Item href="https://github.com/dcastil/tailwind-merge">
          tailwind-merge
        </Item>
        <Item href="https://base-ui.com/react/overview/quick-start">
          Base UI
        </Item>
        <Item href="https://lucide.dev/icons/">
          Lucide
        </Item>
        <Item href="https://github.com/pmndrs/zustand">
          Zustand
        </Item>
        <Item href="https://github.com/antfu/eslint-config">
          @antfu/eslint-config
        </Item>
      </ul>
    </div>
  )
}

function Item(props: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className="text-accent-11 hover:underline"
      >
        {props.children}
      </a>
    </li>
  )
}
