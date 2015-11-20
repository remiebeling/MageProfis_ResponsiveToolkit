<?php
class Mageprofis_ResponsiveToolkit_Model_Observer
{
    public function addLayoutXml($event)
    {
        $xml = $event->getUpdates()
                ->addChild('responsivetoolkit');
        $xml->addAttribute('module', 'MageProfis_ResponsiveToolkit');
        $xml->addChild('file', 'mageprofis-responsive-toolkit.xml');
    }
}
