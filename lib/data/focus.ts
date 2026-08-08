/** The "What I'm working on" note. */
export const focus = {
  paragraphs: [
    'Robotics looks less blocked by autonomy than by everything wrapped around it. A robot only earns its keep once someone builds the unglamorous parts — sensors and grippers for the specific job, monitoring that catches drift, a way for a person to take over mid-task, and tooling to run a fleet rather than one machine.',
    "That's the same shape as the agent layer I've been building over software tools. The model does the task, but everything that makes it usable lives in the scaffolding around it: permissions, evaluation, fallbacks, observability. **Robots need that layer too, and building it early is what makes partial autonomy worth paying for.**",
    "So the question I'm chasing: can agents evaluate robot policies well enough to close that loop — and would that put robots into everyday use sooner than better policies alone?",
  ],
  /** The framing owes a debt to this piece; delete the field to drop the credit. */
  credit: {
    prefix: 'Thinking shaped by a16z’s',
    label: 'Robotics needs fewer roboticists',
    href: 'https://www.a16z.news/p/robotics-needs-fewer-roboticists',
  },
};
