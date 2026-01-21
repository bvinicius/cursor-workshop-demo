interface PageHeadingProps {
	title: string;
	description?: string;
	titleTestId?: string;
	descriptionTestId?: string;
}

export function PageHeading({
	title,
	description,
	titleTestId,
	descriptionTestId,
}: PageHeadingProps) {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-2xl font-semibold" data-testid={titleTestId}>
				{title}
			</h1>
			{description && (
				<p
					className="text-sm text-muted-foreground"
					data-testid={descriptionTestId}
				>
					{description}
				</p>
			)}
		</div>
	);
}
