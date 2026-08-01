# Testimonial outreach

Everything needed to turn the twelve client names on the site into published
testimonials. Nothing here goes live until the client approves their own words.

This file is not part of the build. It lives in `docs/` and is never published.

---

## Why the drafts exist

Most people will not write a testimonial from scratch, but almost everyone
will edit one. Sending a draft and asking "does this sound right, change
anything you like" converts far better than asking for a blank-page favour.

Drafting a quote for a client to approve is normal practice. The client
approving it is what makes it a testimonial rather than a fabrication, so
**do not publish any of these until you have their reply saying yes.**

Keep the approval email. If a quote is ever questioned, that reply is your
evidence.

---

## The outreach email

Send individually, not as a group email. Takes about fifteen minutes for all
six.

> **Subject:** Quick favour - two lines about our work?
>
> Hi [Name],
>
> We have just rebuilt the ScionTech site and I am adding a few client
> comments to it.
>
> I have drafted something below based on what we worked on together. Would
> you be happy for us to publish it, with your name and role? Change anything
> that does not sound right, or rewrite it completely - whatever you are
> comfortable with.
>
> If you would rather we did not, that is completely fine, just say.
>
> ---
>
> *[paste their draft here]*
>
> ---
>
> Thanks,
> Hardik

---

## Drafts

Two of these are grounded in published case studies, so they name real
numbers. The rest are deliberately generic, because I do not know what was
delivered for those clients - **replace the bracketed parts before sending**,
or the client will not recognise the work.

Each is written the way a busy executive actually talks: one specific thing
that changed, and one sentence of judgement. Avoid superlatives; they read
as marketing and clients often strike them out anyway.

### PADI Systems

> "[What was broken before] used to be a recurring problem for us.
> ScionTech [what they did], and it has not come up since. Straightforward
> to work with and they explain their reasoning rather than just handing
> over changes."
>
> — [Name], [Role], PADI Systems

### Tipedia

> "We needed [capability] without hiring for it permanently. ScionTech
> covered that gap properly, and left us with documentation our own team
> can actually follow."
>
> — [Name], [Role], Tipedia

### Simply Analytics

> "Our [environment or pipeline] had grown without much of a plan.
> ScionTech restructured it, and [specific measurable change]. Deployments
> stopped being something we scheduled around."
>
> — [Name], [Role], Simply Analytics

### Tatango

> "ScionTech took on [scope of work] and delivered it without disrupting
> anything in production. What stood out was that they flagged the risks
> we had not asked about, which is not what we expected."
>
> — [Name], [Role], Tatango

### AnswerDash

> "We brought ScionTech in for [reason]. They worked to our constraints
> rather than proposing a rebuild, and [outcome]. A sensible team to have
> alongside your own engineers."
>
> — [Name], [Role], AnswerDash

### Ravenna Solutions

> "[Problem] was costing us time every week. ScionTech fixed the underlying
> cause rather than the symptom, and handed over runbooks so we can handle
> it ourselves now."
>
> — [Name], [Role], Ravenna Solutions

### Cylogy

> "ScionTech handled [scope] across our AWS estate. Clear communication,
> no surprises, and the work held up after they finished."
>
> — [Name], [Role], Cylogy

### Red Wire Services

> "We needed senior cloud help intermittently rather than a full-time hire.
> That is exactly what ScionTech gave us, and [outcome]."
>
> — [Name], [Role], Red Wire Services

---

## Once a reply comes back

Send me the approved text plus the person's name and role, and it goes into
`src/data/testimonials.ts` in a couple of minutes.

Where the client also has a published case study, the card can carry that
engagement's headline result and link through to it, which is what
Simplermedia and Eazybot already do.

Anyone declining is normal. Four to six good quotes is plenty; twelve thin
ones would be worse.
