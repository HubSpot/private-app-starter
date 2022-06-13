<?php include __DIR__.'/../_partials/header.php'; ?>

<pre>
// You'll need to create a <a link="https://developers.hubspot.com/docs/api/private-apps">private app</a> to get your access token 
$hubspot = HubSpot\Factory::createWithAccessToken('your access token');
// src/actions/contacts/list.php
$hubspot->crm()->contacts()->basicApi()->getPage();
</pre>

<table class="contacts-list">
  <thead>
  <tr>
    <th>ID</th>
    <th>Email</th>
    <th>Name</th>
  </tr>
  </thead>
  <tbody>

  <?php foreach ($contactsPage->getResults() as $contact) { ?>
    <tr>
      <td><?php echo $contact->getId(); ?></td>
        <td><?php echo htmlentities($contact->getProperties()['email']); ?></td>
      <td><?php echo htmlentities($contact->getProperties()['firstname'].' '.$contact->getProperties()['lastname']); ?></td>
    </tr>
  <?php }?>
  </tbody>
</table>

<?php include __DIR__.'/../_partials/footer.php'; ?>
