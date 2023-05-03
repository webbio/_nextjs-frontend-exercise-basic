const PostDetail = (): JSX.Element => {
  return (
    <article className="w-full mt-20 flex gap-6 flex-col">
      <div>
        <div>Link naar home</div>
        <h1 className="text-5xl font-extrabold">His mother had always taught him</h1>
      </div>
      <div className="border-y border-zinc-200 py-4 flex gap-4">
        <div className="rounded-full w-12 h-12 flex bg-zinc-100" />
        <div className="flex flex-col">
          <div>Author name</div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>Born in 1992</span>
            <span className="bg-zinc-300 w-1 h-1 flex rounded-full" />
            <span>Tags separated by a comma</span>
            <span className="bg-zinc-300 w-1 h-1 flex rounded-full" />
            <span>Comment amount</span>
          </div>
        </div>
      </div>
      <div className="w-full h-96 flex bg-zinc-100 items-center justify-center font-medium">
        Afbeelding uit "assets/posts/..."
      </div>
      <p className="text-xl">
        His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this
        motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity
        of the group of people he was talking to made him change his mind.
      </p>
    </article>
  );
};

export { PostDetail };
